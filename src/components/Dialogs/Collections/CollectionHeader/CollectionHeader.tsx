import React, { FunctionComponent } from 'react';
import { ICollectionHeader } from './ICollectionHeader';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modelHeader: {
            boxShadow: 'none',
        },
        title: {
            fontSize: theme.typography.pxToRem(20),
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: 400,
        },
    })
);

export const CollectionHeader: FunctionComponent<ICollectionHeader> = (
    props
) => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.modelHeader}>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
