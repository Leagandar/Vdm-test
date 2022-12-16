import { Dispatch, SetStateAction } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

interface AlertDialogProps {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
	title: string;
	description: string;
	onSubmitHandler: () => void;
}

const DialogWrapper = styled(Dialog)({
	minWidth: '220px',
});

const AlertDialog = ({
	visible,
	setVisible,
	title,
	description,
	onSubmitHandler,
}: AlertDialogProps) => {
	const handleClose = () => {
		setVisible(false);
	};

	return (
		<DialogWrapper
			open={visible}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{description}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Close</Button>
				<Button onClick={onSubmitHandler} autoFocus>
					Confirm
				</Button>
			</DialogActions>
		</DialogWrapper>
	);
};

export default AlertDialog;
