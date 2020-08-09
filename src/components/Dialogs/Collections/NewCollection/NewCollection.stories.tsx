import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { NewCollection } from './NewCollection';
import Notes from './NewCollection.notes.md';

export default {
    title: 'Dialogs/New Collection',
    component: NewCollection,
    decorators: [withKnobs],
};

export const Basic = () => {

    const knobsProps = {
        title: text('Title:', 'New Collection Popup'),
        coverPhotoUrl: text('Cover Photo URL', 'https://via.placeholder.com/150')
    };
    

    return (
        <NewCollection {...knobsProps}/>
    );
};

Basic.story = {
    parameters: {
        notes: { Notes },
    },
};
