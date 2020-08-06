import React, { FunctionComponent } from 'react';

import { ThemeProvider } from '@material-ui/styles';

import { theme } from '@/themes/BrandNude/theme';

import { NewCollection } from '@/components/Dialogs/Collections/NewCollection';

export const App: FunctionComponent = () => (
    <ThemeProvider theme={theme}>
        <NewCollection />
    </ThemeProvider>
);
