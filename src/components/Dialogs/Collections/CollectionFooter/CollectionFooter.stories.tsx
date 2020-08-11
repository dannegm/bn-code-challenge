import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { CollectionFooter } from './CollectionFooter';
import Notes from './CollectionFooter.notes.md';

export default {
    title: 'Dialogs/New Collection Footer',
    component: CollectionFooter,
    decorators: [withKnobs],
};

export const Basic = () => {
    const knobsProps = {};

    return <CollectionFooter {...knobsProps} />;
};

Basic.story = {
    parameters: {
        notes: { Notes },
    },
};
