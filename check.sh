# Check node version greater than or equal to 18.17
NODE_VERSION=$(node -v | sed 's/v//g')

# Extract major version number and convert to integer
NODE_VERSION=${NODE_VERSION%%.*}
NODE_VERSION=$((NODE_VERSION+0))


# type custing string to int
NODE_VERSION=$((NODE_VERSION+0))
if [ "$NODE_VERSION" -ge 18 ]; then
    echo "Your Node version is greater than or equal to 18.17, proceeding..."
else
    # Stop yarn install process
    echo "Your node version is $NODE_VERSION. Please install Node.js version 18.17 or greater"
    exit 1
fi
