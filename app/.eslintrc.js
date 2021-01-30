module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "prettier",
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "error"
    },
    "settings": {
        "version": "detect",
    }
};
