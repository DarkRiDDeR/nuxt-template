module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        "eslint:recommended",
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/recommended",
        "plugin:prettier/recommended"
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "no-empty": [2, { "allowEmptyCatch": true }],
        "no-unused-vars": [1, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
        "indent": [2, 4],
        "semi": [2, "always"],
        "no-console": "off",
        "vue/max-attributes-per-line": "off",
        "prettier/prettier": ["error", { "semi": true }]
    }
};
