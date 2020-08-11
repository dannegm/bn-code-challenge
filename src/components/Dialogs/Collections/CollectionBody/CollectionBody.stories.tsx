import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { CollectionBody } from './CollectionBody';
import Notes from './CollectionHeader.notes.md';

export default {
    title: 'Dialogs/New Collection Body',
    component: CollectionBody,
    decorators: [withKnobs],
};

export const Basic = () => {
    const knobsProps = {};

    return <CollectionBody {...knobsProps} />;
};

Basic.story = {
    parameters: {
        notes: { Notes },
    },
};
