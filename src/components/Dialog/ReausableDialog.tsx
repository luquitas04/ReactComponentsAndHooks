import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button as MuiButton,
  DialogProps,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ReusableDialogProps extends Omit<DialogProps, 'open' | 'onClose'> {
  title: string;
  message: string | React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  open?: boolean;
  onClose?: () => void;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  showCloseIcon?: boolean;
  disablePrimaryButton?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const ReusableDialog = ({
  title,
  message,
  primaryButtonText = 'Confirm',
  secondaryButtonText,
  open = false,
  onClose,
  onPrimaryAction,
  onSecondaryAction,
  showCloseIcon = true,
  disablePrimaryButton = false,
  maxWidth = 'sm',
  ...dialogProps
}: ReusableDialogProps) => {
  const handlePrimaryAction = () => {
    onPrimaryAction?.();
    onClose?.();
  };

  const handleSecondaryAction = () => {
    onSecondaryAction?.();
    onClose?.();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      {...dialogProps}
    >
      <DialogTitle>
        {title}
        {showCloseIcon && (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      
      <DialogContent>
        {typeof message === 'string' ? (
          <DialogContentText>{message}</DialogContentText>
        ) : (
          message
        )}
      </DialogContent>
      
      <DialogActions>
        {secondaryButtonText && (
          <MuiButton onClick={handleSecondaryAction}>
            {secondaryButtonText}
          </MuiButton>
        )}
        <MuiButton
          onClick={handlePrimaryAction}
          color="primary"
          variant="contained"
          disabled={disablePrimaryButton}
        >
          {primaryButtonText}
        </MuiButton>
      </DialogActions>
    </Dialog>
  );
};

export default ReusableDialog;