module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['eslint-config-clean-code'],
    parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react'],
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
    },
};
