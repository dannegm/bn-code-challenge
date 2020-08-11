import React, { FunctionComponent } from 'react';
import { INewCollection } from './INewCollection';
import { Wrapper, Title, CollectionButton } from './NewCollection.styled';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { CollectionHeader } from '@/components/Dialogs/Collections/CollectionHeader';
import { CollectionBody } from '@/components/Dialogs/Collections/CollectionBody';
import { CollectionFooter } from '@/components/Dialogs/Collections/CollectionFooter';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        title: {
            fontSize: theme.typography.pxToRem(20),
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: 400,
        },
        gridRow: {
            padding: theme.typography.pxToRem(16),
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

    const collectionHeader = {
        title: props.title,
    };
    const collectionBody = {
        coverPhotoUrl: props.coverPhotoUrl,
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
                            <CollectionHeader {...collectionHeader} />
                            <CollectionBody {...collectionBody} />
                            <CollectionFooter />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </Wrapper>
    );
};
