import { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface ErrorAlertProps {
	label: string;
	error: string | undefined;
	autoHideDuration: number;
}

const ErrorAlert = ({ label, error, autoHideDuration }: ErrorAlertProps) => {
	const [isOpenErrorAlert, setIsOpenErrorAlert] = useState(false);

	useEffect(() => {
		if (!error) {
			return;
		}

		setIsOpenErrorAlert(true);
	}, [error]);

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setIsOpenErrorAlert(false);
	};

	return (
		<Snackbar
			open={isOpenErrorAlert}
			autoHideDuration={autoHideDuration}
			onClose={handleClose}
		>
			<Alert severity="error">{label}</Alert>
		</Snackbar>
	);
};

export default ErrorAlert;
