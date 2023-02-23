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
        // 'newline-before-return': 'error',
        'no-console': 'warn',
        // 'no-continue': 'off',
        // 'require-yield': 'error',

        // 中身がないタグを閉じる
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/no-unknown-property': [
            "error",
            {
                // threeのライブラリ内でエラーが出るので応急処置
                "ignore": ["data", "args", "rotation", "array", "attach", "itemSize", "transparent", "depthTest", "depthWrite", "array","count"]}
        ],

        'react/prop-types': 'off',
        "react-hooks/exhaustive-deps": [
            "warn",
            {
                additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
            },
        ],
        "no-duplicate-imports": "warn",
        "react/button-has-type": "warn",
        "react/no-access-state-in-setstate": "error",
        "react/jsx-boolean-value": "warn",
        "react/jsx-equals-spacing": ["warn", "never"],
        "react/jsx-fragments": "warn",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/void-dom-elements-no-children": "error",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
    },
};