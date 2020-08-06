const path = require('path');

module.exports = {
    addons: [
        '@storybook/preset-typescript',
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-notes/register-panel',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
    ],
    webpackFinal: async (config) => {
        const rules = [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader',
                    'react-docgen-typescript-loader',
                ],
            },
        ];

        const extensions = ['.ts', '.tsx'];

        const alias = {
            '@': path.resolve(__dirname, '../src/'),
        };

        config.module.rules.push(...rules);

        config.resolve.extensions.push(...extensions);

        config.resolve.alias = {
            ...config.resolve.alias,
            ...alias,
        };

        return config;
    },
};
