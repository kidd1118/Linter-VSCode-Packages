module.exports = {
    env: {},
    extends: [
        // inculing cas eslint base
        "../eslint-config-base/.eslintrc.js",
        "../eslint-config-javascript/.eslintrc.js"
    ],
    overrides: [
        {
            files: ["*.js"],
            globals: {},
            parser: "@babel/eslint-parser",
            parserOptions: {},
            plugins: ["@babel/eslint-plugin"],
            rules: {}
        }
    ]
};
