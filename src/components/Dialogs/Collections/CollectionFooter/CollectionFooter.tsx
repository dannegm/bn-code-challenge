import React, { FunctionComponent } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        submitFormBtn: {
            float: 'right',
        },
        gridRow: {
            padding: theme.typography.pxToRem(16),
        },
    })
);

export const CollectionFooter: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Box component='div'>
            {/* Row - Collection Submit button */}
            <Grid container className={classes.gridRow}>
                <Grid item xs={6}>
                    <Button variant='contained'>Cancel</Button>
                </Grid>
                <Grid item xs={6}>
                    <label
                        htmlFor='contained-button-file'
                        className={classes.submitFormBtn}
                    >
                        <Button variant='contained' color='primary'>
                            Submit
                        </Button>
                    </label>
                </Grid>
            </Grid>
        </Box>
    );
};
