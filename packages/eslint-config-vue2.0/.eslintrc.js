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
                // for vue recomended
                "plugin:vue/recommended"
            ],
            globals: {},
            parser: "vue-eslint-parser",
            plugins: ["eslint-plugin-vue"],
            rules: {
                "vue/html-indent": "off"
            }
        }
    ]
};
