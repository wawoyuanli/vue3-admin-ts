module.exports = {
    rules: {
        "vue/no-v-model-argument": "off"
    },
    "extend": ["eslint:recommended"],
    "parser": "babel-eslint",
    "env": {
        "amd": true,
        "es6": true,
        "browser": true,
        "node": false
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        "requireConfigFile": "false"
    },
}