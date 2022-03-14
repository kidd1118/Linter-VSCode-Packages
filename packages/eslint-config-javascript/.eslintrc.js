module.exports = {
    env: {},
    extends: [
        // inculing cas eslint base
        "../eslint-config-base/.eslintrc.js"
    ],
    overrides: [
        {
            files: ["*.js"],
            extends: [],
            globals: {},
            parser: "",
            parserOptions: {},
            plugins: [],
            rules: {}
        }
    ]
};
