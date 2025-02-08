module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
    rules: {
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
        "react/react-in-jsx-scope": "off",
        "no-console": 0,
        "react/no-unused-state": 1,
        "prettier/prettier": [
            "warn",
            {
                printWidth: 80,
                tabWidth: 4,
                singleQuote: true,
                semi: true,
                trailingComma: "all",
            },
        ],
    },
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
};
