import { Dispatch, memo, SetStateAction, useEffect, useMemo } from 'react';
import { type GridSelectionModel } from '@mui/x-data-grid';
import styled from 'styled-components';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { getDocuments } from '../../../store/slices/documents';
import DataTable from '../../UI/DataTable';
import { columns } from './documentsTableData';
import {
	getPropertyTotal,
	parseDocuments,
} from '../../../utils/documentsUtils';
import DocumentsTableFooter from './DocumentsTableFooter';
import ErrorOverlay from '../../UI/ErrorOverlay';

interface DocumentsTableProps {
	setSelectionModel: Dispatch<SetStateAction<GridSelectionModel>>;
}

const GridWrapper = styled.div({ height: 423, width: '100%' });

const DocumentsTable = memo(({ setSelectionModel }: DocumentsTableProps) => {
	const dispatch = useAppDispatch();
	const { data, error, status } = useAppSelector(
		(state) => state.documents.documents
	);

	const { parsedDocuments, totalVolume, totalQuantity } = useMemo(() => {
		const parsedValue = parseDocuments(data);
		const totalVolume = getPropertyTotal(parsedValue, 'volume');
		const totalQuantity = getPropertyTotal(parsedValue, 'qty');
		return {
			parsedDocuments: parsedValue,
			totalVolume,
			totalQuantity,
		};
	}, [data]);

	useEffect(() => {
		dispatch(getDocuments());
	}, [dispatch]);

	return (
		<GridWrapper>
			<DataTable
				rows={parsedDocuments}
				columns={columns}
				loading={status === 'loading'}
				sortModel={[{ field: 'delivery_date', sort: 'asc' }]}
				setSelectionModel={setSelectionModel}
				error={error}
				components={{
					Footer: () => (
						<DocumentsTableFooter
							volume={totalVolume}
							quantity={totalQuantity}
						/>
					),
					ErrorOverlay: () => (
						<ErrorOverlay
							label={`Failed to load documents${error ? `: ${error}` : ''}`}
						/>
					),
				}}
			/>
		</GridWrapper>
	);
});

export default DocumentsTable;
