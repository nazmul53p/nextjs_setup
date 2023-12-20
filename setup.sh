husky install
npx husky add .husky/pre-commit 'npx lint-staged'
sed -i "s/npm test//g" .husky/pre-commit


