module.exports = {
    "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
    "**/*.(ts|tsx|js)": filenames => [
        `prettier --write ${filenames.join(" ")}`,
        `eslint --fix ${filenames.join(" ")}`,
    ],
    "**/*.(json|md)": "prettier --write",
};
