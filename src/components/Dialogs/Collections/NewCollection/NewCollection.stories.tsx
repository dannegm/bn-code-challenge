import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { NewCollection } from './NewCollection';
import Notes from './NewCollection.notes.md';

export default {
    title: 'Dialogs/New Collection',
    component: NewCollection,
    decorators: [withKnobs],
};

export const Basic = () => {
    return <NewCollection />;
};

Basic.story = {
    parameters: {
        notes: { Notes },
    },
};
