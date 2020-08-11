import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { CollectionHeader } from './CollectionHeader';
import Notes from './CollectionHeader.notes.md';

export default {
    title: 'Dialogs/New Collection Header',
    component: CollectionHeader,
    decorators: [withKnobs],
};

export const Basic = () => {
    const knobsProps = {
        title: text('Title:', 'New Collection Popup'),
        coverPhotoUrl: text(
            'Cover Photo URL',
            'https://via.placeholder.com/150'
        ),
    };

    return <CollectionHeader {...knobsProps} />;
};

Basic.story = {
    parameters: {
        notes: { Notes },
    },
};
