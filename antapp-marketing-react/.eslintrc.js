module.exports = {
    env: {
        browser: true,
        es2020: true,
        'jest/globals': true,
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    globals: { module: 'readonly' },
    rules: {
    //     'newline-before-return': 'error',
    //     'no-console': 'warn',
    //     'no-continue': 'off',
    //     'require-yield': 'error',
    //     "react/jsx-uses-react": "off",
    //     "react/react-in-jsx-scope": "off",
    //
    //     // 中身がないタグを閉じる
    //     'react/self-closing-comp': [
    //         'error',
    //         {
    //             component: true,
    //             html: true,
    //         },
    //     ],
    //
    //     'react/prop-types': 'off',
    // },
        "react-hooks/exhaustive-deps": [
            "warn",
            {
                additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
            },
        ],
        "no-duplicate-imports": "warn",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/button-has-type": "warn",
        "react/no-access-state-in-setstate": "error",
        "react/jsx-boolean-value": "warn",
        "react/jsx-equals-spacing": ["warn", "never"],
        "react/jsx-fragments": "warn",
        "react/self-closing-comp": ["warn", { component: true, html: true }],
        "react/void-dom-elements-no-children": "error",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
    },
};