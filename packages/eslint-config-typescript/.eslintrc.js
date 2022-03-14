module.exports = {
    env: {},
    extends: [
        // inculing cas eslint base
        "../eslint-config-base/.eslintrc.js"
    ],
    overrides: [
        {
            files: ["*.ts"],
            extends: [
                // Uses the recommended rules from the @typescript-eslint/eslint-plugin
                "plugin:@typescript-eslint/recommended",
                // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
                "prettier/@typescript-eslint"
            ],
            globals: {},
            parser: "@typescript-eslint/parser",
            parserOptions: {},
            plugins: [],
            rules: {
                "@typescript-eslint/no-explicit-any": "off"
            }
        }
    ]
};
