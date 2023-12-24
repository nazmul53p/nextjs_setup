#!/bin/bash

# Change project name
changeProjectName() {
    # Change package.json file name
    sed -i "s/\"name\": \"nextjs_setup\"/\"name\": \"$PROJECT_NAME\"/" package.json

    # Change Folder name
    cd ..
    mv nextjs_setup "$PROJECT_NAME"
    cd "$PROJECT_NAME"
    rm -rf .git
    git init
    
}

# Function to create Dockerfile
createDockerfile() {
cat > Dockerfile <<EOF
FROM node:$NODE_VERSION

RUN npm install pm2 -g

EXPOSE $PORT

EOF
}

# Function to create docker-compose.yml
createDockerCompose() {
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
createEcosystemConfig() {
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
createDeployh() {
cat > deploy.sh <<EOF
git pull
docker-compose down
docker-compose up -d
docker exec $PROJECT_NAME yarn install
docker exec $PROJECT_NAME yarn build
docker exec $PROJECT_NAME pm2 start --only "$PROJECT_NAME-prod"

EOF
}

# Check node version greater than or equal to 18.17
NODE_VERSION=$(node -v | sed 's/v//g')

# Check if the name key in package.json is "nextjs_setup"
name=$(cat package.json | grep '"name"' | cut -d'"' -f4)

current_branch=$(git rev-parse --abbrev-ref HEAD)

if [[ "$current_branch" == "dev_nazmul" || "$current_branch" == "dev_raad" ]]; then
    exit 0
fi

if [ "$name" == "nextjs_setup" ]; then
    # Prompt user for project name
    sleep 2
    echo
    echo

    read -p "Enter project name: " PROJECT_NAME

    # Prompt user for port number
    read -p "Enter port number for the app: " PORT
    
    # If it is, replace it with the new project name
    changeProjectName
    echo "1. DONE: Change project name is $PROJECT_NAME"
fi



# Check if Dockerfile exists
if [ -e "Dockerfile" ]; then
    echo "2. Dockerfile already created."
else
    # Create files
    createDockerfile
    echo "2. DONE: Dockerfile created successfully."
fi

# Check if docker-compose.yml exists
if [ -e "docker-compose.yml" ]; then
    echo "3. docker-compose.yml already created."
else
    # Create files
    createDockerCompose
    echo "3. DONE: docker-compose.yml created successfully."
fi

# Check if ecosystem.config.js exists
if [ -e "ecosystem.config.js" ]; then
    echo "4. ecosystem.config.js already created."
else
    createEcosystemConfig
    echo "4. DONE: ecosystem.config.js created successfully."
fi

# Check if deploy.sh exists
if [ -e "deploy.sh" ]; then
    echo "5. deploy.sh already created."
else
    createDeployh
    echo "5. DONE: deploy.sh created successfully."
fi

# Check .husky/pre-commit file exists
if [ -e ".husky/pre-commit" ]; then
    echo "6. .husky/pre-commit already created."
else
    # Create files
    yarn husky:init
    # echo "6. DONE: .husky/pre-commit created successfully."
fi




