// include all eslint config file for testing
module.exports = {
    extends: [
        "./packages/eslint-config-base/.eslintrc.js",
        "./packages/eslint-config-babel/.eslintrc.js",
        "./packages/eslint-config-javascript/.eslintrc.js",
        "./packages/eslint-config-typescript/.eslintrc.js",
        "./packages/eslint-config-vue2.0/.eslintrc.js",
        "./packages/eslint-config-vue3.0/.eslintrc.js"
    ]
};
