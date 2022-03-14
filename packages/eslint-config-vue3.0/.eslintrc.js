// not config ready, becase no project using vue.3.0
module.exports = {
    env: {},
    extends: [
        // inculing cas eslint base
        "../eslint-config-base/.eslintrc.js"
    ],
    overrides: [
        {
            files: ["*.vue"],
            extends: [
                // Uses the recommended rules from the @typescript-eslint/eslint-plugin
                "plugin:@typescript-eslint/recommended",
                // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
                "prettier/@typescript-eslint",
                // for vue recomended
                "plugin:vue/recommended"
            ],
            globals: {},
            parser: "vue-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            },
            plugins: ["eslint-plugin-vue"],
            rules: {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-this-alias": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "vue/html-indent": "off"
            }
        }
    ]
};
