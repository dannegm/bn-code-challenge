import React, { FunctionComponent, useState } from 'react';

import { INewCollection } from './INewCollection';

import { Wrapper, Title, CollectionButton } from './NewCollection.styled';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import TextField from '@material-ui/core/TextField';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        modelHeader: {
            boxShadow: 'none'
        },
        collectionWrp: {
            backgroundColor: theme.palette.background.paper,
            border: `${theme.typography.pxToRem(1)} solid ${
                theme.palette.common.black
                }`,

            boxShadow: theme.shadows[5],
            borderRadius: theme.typography.pxToRem(4),
            width: theme.typography.pxToRem(608),
            '&:focus': {
                outline: 'none',
            },
        },
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            fontSize: theme.typography.pxToRem(20),
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: 400,
        },
        gridRow: {
            padding: theme.typography.pxToRem(16),
        },
        avatarWrp: {
            paddingRight: theme.typography.pxToRem(16),
        },
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
            }
        },
        avatar: {
            width: theme.typography.pxToRem(112),
            height: theme.typography.pxToRem(112),
            borderRadius: theme.typography.pxToRem(4)
        },
        avatarTitleWrp: {
            width: `calc(100% - ${theme.typography.pxToRem(268)})`,
        },
        avatarUploadWrp: {
            width: theme.typography.pxToRem(140),
        },
        coverPhotoTitle: {
            fontSize: theme.typography.pxToRem(20),
            textTransform: 'uppercase'
        },
        coverPhotoSubTitle: {
            fontSize: theme.typography.pxToRem(14),
            color: 'rgba(0, 0, 0, 0.6)',
            width: theme.typography.pxToRem(230),
            lineHeight: theme.typography.pxToRem(20),
            paddingTop: theme.typography.pxToRem(10),
            textTransform: 'uppercase'
        },
        inputFile: {
            display: 'none',
        },
        uploadFileBtn: {
            float: 'right',
            marginTop: theme.typography.pxToRem(10),
        },
        submitFormBtn: {
            float: 'right',
        },
        userBtn: {
            float: 'right',
        },
        iconButton: {
            padding: 10,
        },
        inputSearch: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
    })
);

export const NewCollection: FunctionComponent<INewCollection> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Wrapper>
            <Title>Dialog - New Collection</Title>
            <CollectionButton onClick={handleOpen}>Click Here</CollectionButton>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.collectionWrp}>
                        <div className={classes.root}>
                            <AppBar position='static' className={classes.modelHeader}>
                                <Toolbar>
                                    <Typography
                                        variant='h6'
                                        className={classes.title}
                                    >
                                        {props.title}
                                    </Typography>
                                </Toolbar>
                            </AppBar>
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

                                        <Typography variant='h5' className={classes.coverPhotoTitle}>
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

                                        <Button className={classes.userBtn}>
                                            USE SITE PHOTO
                                            </Button>
                                        <input
                                            accept='image/*'
                                            className={classes.inputFile}
                                            id='contained-button-file'
                                            multiple
                                            type='file'
                                        />
                                        <label
                                            htmlFor='contained-button-file'
                                            className={
                                                classes.uploadFileBtn
                                            }
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
                                <Grid
                                    container
                                    className={classes.gridRow}
                                >
                                    <Grid item xs={12}>

                                        <Typography
                                            variant='subtitle2'
                                            gutterBottom
                                        >
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
                                <Grid
                                    container
                                    className={classes.gridRow}
                                >
                                    <Grid item xs={10}>

                                        <Typography
                                            variant='subtitle2'
                                            gutterBottom
                                        >
                                            ADD FRIEND
                                        </Typography>

                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography
                                            variant='subtitle2'
                                            gutterBottom
                                            align='right'
                                        >
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
                                <Grid
                                    container
                                    className={classes.gridRow}
                                >
                                    <Grid item xs={6}>
                                        <Typography
                                            variant='subtitle2'
                                            gutterBottom
                                        >
                                            Keep Collection Secret <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {/* Row - Collection Submit button */}
                                <Grid
                                    container
                                    className={classes.gridRow}
                                >
                                    <Grid item xs={6}>
                                        <Button    
                                            variant="contained"                                            
                                            onClick={handleClose}
                                        >
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <label
                                            htmlFor='contained-button-file'
                                            className={
                                                classes.submitFormBtn
                                            }
                                        >
                                            <Button
                                                variant="contained"
                                                color='primary'
                                            >
                                                Submit
                                            </Button>
                                        </label>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </Wrapper>
    );
};
