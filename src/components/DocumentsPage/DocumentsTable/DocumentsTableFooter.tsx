import { Typography } from '@mui/material';
import { GridPagination } from '@mui/x-data-grid';
import styled from 'styled-components';

interface DocumentsTableProps {
	volume: number;
	quantity: number;
}

const FooterWrapper = styled.div`
	border-top: 1px solid rgba(224, 224, 224, 1);
	overflow: auto;
	min-height: 52px;
`;

const FooterContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 406px;
`;

const FooterControls = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 0.8rem;

	@media (min-width: 690px) {
		flex-direction: row;
	}
`;

const FooterText = styled(Typography)`
	margin-right: 0;

	@media (min-width: 690px) {
		margin-right: 1.2rem;
	}
`;

const DocumentsTableFooter = ({ volume, quantity }: DocumentsTableProps) => {
	return (
		<FooterWrapper>
			<FooterContent>
				<FooterControls>
					<FooterText variant="h6">Total Volume: {volume}</FooterText>
					<Typography variant="h6">Total Quantity: {quantity}</Typography>
				</FooterControls>
				<GridPagination sx={{ overflow: 'hidden' }} />
			</FooterContent>
		</FooterWrapper>
	);
};

export default DocumentsTableFooter;
