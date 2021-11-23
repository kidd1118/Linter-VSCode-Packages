module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",
        // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "prettier/@typescript-eslint",
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
        // Make sure this is always the last configuration in the extends array.
        "plugin:prettier/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": ["error"],
        "@typescript-eslint/no-explicit-any": "off"
    }
};
