import React, { FunctionComponent, ReactNode } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../src/themes/BrandNude/theme';

interface IWrapperProps {
    children: ReactNode;
}

export const Wrapper: FunctionComponent<IWrapperProps> = (props) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
