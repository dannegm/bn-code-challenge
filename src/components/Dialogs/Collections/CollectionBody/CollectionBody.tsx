import React, { FunctionComponent } from 'react';

import { ICollectionBody } from './ICollectionBody';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatarSection: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            '&:after': {
                content: "''",
                width: '100%',
                height: '1px',
                backgroundColor: 'rgba(112, 112, 112,0.10)',
                padding: '0',
                position: 'absolute',
                bottom: '0',
                left: '0',
            },
        },
        avatar: {
            width: theme.typography.pxToRem(112),
            height: theme.typography.pxToRem(112),
            borderRadius: theme.typography.pxToRem(4),
        },
        avatarWrp: {
            paddingRight: theme.typography.pxToRem(16),
        },
        avatarTitleWrp: {
            width: `calc(100% - ${theme.typography.pxToRem(268)})`,
        },
        coverPhotoTitle: {
            fontSize: theme.typography.pxToRem(20),
            textTransform: 'uppercase',
        },
        avatarUploadWrp: {
            width: theme.typography.pxToRem(140),
        },
        userBtn: {
            float: 'right',
        },

        gridRow: {
            padding: theme.typography.pxToRem(16),
        },

        coverPhotoSubTitle: {
            fontSize: theme.typography.pxToRem(14),
            color: 'rgba(0, 0, 0, 0.6)',
            width: theme.typography.pxToRem(230),
            lineHeight: theme.typography.pxToRem(20),
            paddingTop: theme.typography.pxToRem(10),
            textTransform: 'uppercase',
        },
        inputFile: {
            display: 'none',
        },
        uploadFileBtn: {
            float: 'right',
            marginTop: theme.typography.pxToRem(10),
        },
    })
);

export const CollectionBody: FunctionComponent<ICollectionBody> = (props) => {
    const classes = useStyles();

    return (
        <Box component='div'>
            {/* Row - Collection Image */}
            <Grid
                container
                className={`${classes.gridRow} ${classes.avatarSection}`}
            >
                <Grid className={classes.avatarWrp}>
                    <Avatar
                        alt='Cover Photo URL'
                        src={props.coverPhotoUrl}
                        className={classes.avatar}
                    />
                </Grid>
                <Grid className={classes.avatarTitleWrp}>
                    <Typography
                        variant='h5'
                        className={classes.coverPhotoTitle}
                    >
                        COVER PHOTO
                    </Typography>
                    <Typography
                        variant='overline'
                        display='block'
                        gutterBottom
                        className={classes.coverPhotoSubTitle}
                    >
                        {`Drag AND DROP OR CLICK TO\nUPLOAD PHOTO FROM YOUR COMPUTER`}
                    </Typography>
                </Grid>

                <Grid className={classes.avatarUploadWrp}>
                    <Button className={classes.userBtn}>USE SITE PHOTO</Button>
                    <input
                        accept='image/*'
                        className={classes.inputFile}
                        id='contained-button-file'
                        multiple
                        type='file'
                    />
                    <label
                        htmlFor='contained-button-file'
                        className={classes.uploadFileBtn}
                    >
                        <Button
                            variant='contained'
                            color='primary'
                            component='span'
                        >
                            Upload
                        </Button>
                    </label>
                </Grid>
            </Grid>

            {/* Row - Collection Details */}
            <Grid container className={classes.gridRow}>
                <Grid item xs={12}>
                    <Typography variant='subtitle2' gutterBottom>
                        DETAILS
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='outlined-full-width'
                        label='Title'
                        placeholder='Colletion Title'
                        fullWidth
                        margin='normal'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='outlined-full-width'
                        label='Description'
                        placeholder='Type Here'
                        helperText='Whats Your Collection about?'
                        fullWidth
                        margin='normal'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                    />
                </Grid>
            </Grid>

            {/* Row - Collection Search Friends */}
            <Grid container className={classes.gridRow}>
                <Grid item xs={10}>
                    <Typography variant='subtitle2' gutterBottom>
                        ADD FRIEND
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant='subtitle2' gutterBottom align='right'>
                        <PeopleAltOutlinedIcon />
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id='outlined-full-width'
                        label='Search'
                        style={{ margin: 8 }}
                        placeholder='Search'
                        fullWidth
                        margin='normal'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                    />
                </Grid>
            </Grid>

            {/* Row - Collection Secret */}
            <Grid container className={classes.gridRow}>
                <Grid item xs={6}>
                    <Typography variant='subtitle2' gutterBottom>
                        Keep Collection Secret{' '}
                        <Switch
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
