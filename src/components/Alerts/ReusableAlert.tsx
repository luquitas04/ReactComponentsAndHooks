import {
  AlertTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import MuiButton from '@mui/material/Button';
import { useEffect, useState } from 'react';

interface AlertProps {
  type: 'modal' | 'non-modal';
  title: string;
  message: string;
  textButton?: string;
  open?: boolean;
  onClose?: () => void;
  autoCloseDelay?: number;
  severity?: 'error' | 'warning' | 'info' | 'success';
}

const ReusableAlert = ({
  type = 'modal',
  title,
  message,
  textButton,
  open: propOpen = false,
  onClose,
  autoCloseDelay = 5000,
  severity = 'info'
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState(propOpen);
  const [showNonModal, setShowNonModal] = useState(propOpen);

  // Sync internal state with props
  useEffect(() => {
    setIsOpen(propOpen);
    setShowNonModal(propOpen);
  }, [propOpen]);

  // Auto-close for non-modal alerts
  useEffect(() => {
    if (type === 'non-modal' && showNonModal && autoCloseDelay && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [showNonModal, type, autoCloseDelay]);

  const handleClickOpen = () => {
    if (!open) {
      setIsOpen(true);
      setShowNonModal(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowNonModal(false);
    onClose?.();
  };

  return (
    <>
      {type === 'non-modal' ? (
        showNonModal && (
          <MuiAlert severity={severity} onClose={handleClose}>
            <AlertTitle>{title}</AlertTitle>
            {message}
          </MuiAlert>
        )
      ) : (
        <>
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                {message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <MuiButton onClick={handleClose} autoFocus>
                {textButton}
              </MuiButton>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default ReusableAlert;