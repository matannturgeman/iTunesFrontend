import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'white',
        border: 'none',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function TransitionsModal(props) {
    const { renderTitle, RenderContent, onClose } = props
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (typeof (onClose) === 'function') onClose();
    };

    return (
        <div>
            <div onClick={handleOpen} className="action-btn">
                {
                    Boolean(renderTitle) &&
                    renderTitle
                }
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {
                            Boolean(RenderContent) &&
                            <RenderContent closeModal={handleClose} {...props} />
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default TransitionsModal