# husky init
preCommitHusky() {
    husky install
    npx husky add .husky/pre-commit 'npx lint-staged'
    sed -i "s/npm test//g" .husky/pre-commit
}


# Check .husky/pre-commit file exists
if [ -e ".husky/pre-commit" ]; then
    echo "6. .husky/pre-commit already created."
else
    # Create files
    preCommitHusky
    echo "6. DONE: .husky/pre-commit created successfully."
fi