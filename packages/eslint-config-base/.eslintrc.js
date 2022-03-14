module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
        // Make sure this is always the last configuration in the extends array.
        "plugin:prettier/recommended"
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["eslint-plugin-prettier"],
    rules: {
        "prettier/prettier": ["error"]
    }
};
