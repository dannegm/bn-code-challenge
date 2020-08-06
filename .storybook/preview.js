import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import { Wrapper } from './Wrapper';

const withWrapper = (storyFn) => <Wrapper>{storyFn()}</Wrapper>;

addDecorator(withWrapper);

addDecorator((storyFn, context) => {
    return withConsole()(storyFn)(context);
});

addParameters({
    options: {
        showRoots: true,
    },
    backgrounds: [
        { name: 'Light', value: '#FFFFFF', default: true },
        { name: 'Dark', value: '#202020' },
    ],
});

const loaderFn = () => {
    const allExports = [require('./welcome.stories.mdx')];
    const fromSrc = require.context('../src', true, /\.stories\.(tsx|mdx)$/);

    fromSrc.keys().forEach((story) => allExports.push(fromSrc(story)));

    return allExports;
};

configure(loaderFn, module);
