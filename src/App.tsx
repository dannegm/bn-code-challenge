import React, { FunctionComponent } from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { theme } from '@/themes/BrandNude/theme';

import { NewCollection } from '@/components/Dialogs/Collections/NewCollection';

export const App: FunctionComponent = () => {
    const collectionProps = {
        title: 'New collecion box',
        coverPhotoUrl: 'https://via.placeholder.com/150',
    };

    return (
        <ThemeProvider theme={theme}>
            <NewCollection {...collectionProps} />
        </ThemeProvider>
    );
};
