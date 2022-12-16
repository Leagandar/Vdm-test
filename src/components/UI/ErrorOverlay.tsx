import { Typography } from '@mui/material';
import styled from 'styled-components';

interface ErrorOverlayProps {
	label: string;
}

const OverlayWrapper = styled.div({
	display: 'flex',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center',
});

const ErrorOverlay = ({ label }: ErrorOverlayProps) => {
	return (
		<OverlayWrapper>
			<Typography variant="h5" color="error">
				{label}
			</Typography>
		</OverlayWrapper>
	);
};

export default ErrorOverlay;
