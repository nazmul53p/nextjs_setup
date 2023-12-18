#!/bin/bash

# Function to create Dockerfile
create_dockerfile() {
cat > Dockerfile <<EOF
FROM node:$NODE_VERSION

RUN npm install pm2 -g

EXPOSE $PORT

EOF
}

# Function to create docker-compose.yml
create_docker_compose() {
cat > docker-compose.yml <<EOF
version: "3.9"
services:
    admin:
        build:
            context: ./
            dockerfile: Dockerfile
        image: $PROJECT_NAME
        tty: true
        restart: unless-stopped
        container_name: $PROJECT_NAME
        working_dir: /app/
        volumes:
            - ./:/app
        ports:
            - "${PORT}:3000"
        networks:
            - $PROJECT_NAME
networks:
    $PROJECT_NAME:
        driver: bridge

EOF
}

# Function to create ecosystem.config.js
create_ecosystem_config() {
cat > ecosystem.config.js <<EOF
module.exports = {
  apps: [
    {
      name: "$PROJECT_NAME-prod",
      script: "yarn",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "$PROJECT_NAME-dev",
      script: "yarn",
      args: "dev",
      interpreter: "/bin/bash",
      watch: true,
    },
  ],
};
EOF
}

# Function to create deploy.sh
create_deployh() {
cat > deploy.sh <<EOF
sudo git pull
sudo docker-compose down
sudo docker-compose up -d
sudo docker exec $PROJECT_NAME yarn install
sudo docker exec $PROJECT_NAME yarn build
sudo docker exec $PROJECT_NAME pm2 start --only "$PROJECT_NAME-prod"

EOF
}

# Prompt user for Node.js version
read -p "Enter Node.js version (e.g., 14): " NODE_VERSION

# Prompt user for project name
read -p "Enter project name: " PROJECT_NAME

# Prompt user for port number
read -p "Enter port number for the app: " PORT


# Check if Dockerfile exists
if [ -e "Dockerfile" ]; then
    echo "Dockerfile already created."
else
    # Create files
    create_dockerfile
    echo "OK: Dockerfile created successfully."
fi

# Check if docker-compose.yml exists
if [ -e "docker-compose.yml" ]; then
    echo "docker-compose.yml already created."
else
    # Create files
    create_docker_compose
    echo "OK: docker-compose.yml created successfully."
fi

# Check if ecosystem.config.js exists
if [ -e "ecosystem.config.js" ]; then
    echo "ecosystem.config.js already created."
else
    create_ecosystem_config
    echo "OK: ecosystem.config.js created successfully."
fi

# Check if deploy.sh exists
if [ -e "deploy.sh" ]; then
    echo "deploy.sh already created."
else
    create_deployh
    echo "OK: deploy.sh created successfully."
fi



