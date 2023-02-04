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
        'newline-before-return': 'error',
        'no-console': 'warn',
        'no-continue': 'off',
        'require-yield': 'error',

        // 中身がないタグを閉じる
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],

        'react/prop-types': 'off',
    },
};