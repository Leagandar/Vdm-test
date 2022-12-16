import { useState } from 'react';
import { type GridSelectionModel } from '@mui/x-data-grid';
import styled from 'styled-components';
import DocumentsTable from './DocumentsTable/DocumentsTable';
import { Button } from '@mui/material';
import { useAppSelector } from '../../hooks/useAppSelector';
import { revokeDocuments } from '../../store/slices/documents';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import ErrorAlert from '../UI/ErrorAlert';
import AlertDialog from '../UI/AlertDialog';
import {
	getDocumentsNameByIds,
	getIdsFromSelectionModel,
} from '../../utils/documentsUtils';

const TableWrapper = styled.article({
	display: 'flex',
	flexDirection: 'column',
});

const ResetButton = styled(Button)({
	marginTop: '1rem',
	alignSelf: 'flex-end',
});

const DocumentsPage = () => {
	const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
	const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
	const { documents, error, status } = useAppSelector(
		(state) => state.documents
	);
	const dispatch = useAppDispatch();

	const onResetDocumentsHandler = (selectionModel: GridSelectionModel) => {
		const documentIds = getIdsFromSelectionModel(selectionModel);
		dispatch(revokeDocuments(documentIds));
		setConfirmDialogVisible(false);
	};

	const onResetButtonClick = () => {
		if (selectionModel.length === 0) {
			return;
		}

		setConfirmDialogVisible(true);
	};

	const onSubmitHandler = () => onResetDocumentsHandler(selectionModel);

	const getAlertDescription = () => {
		const title = 'Documents with the corresponding names will be deleted: ';
		const documentIds = getIdsFromSelectionModel(selectionModel);
		const documentNames = getDocumentsNameByIds(documents.data, documentIds);
		return title + documentNames.join(', ');
	};

	return (
		<TableWrapper>
			<DocumentsTable setSelectionModel={setSelectionModel} />
			<ErrorAlert
				label={`Failed to revoke documents:${error}`}
				error={error}
				autoHideDuration={4000}
			/>
			<AlertDialog
				title="Are you sure you want to revoke the item(s)?"
				description={getAlertDescription()}
				visible={confirmDialogVisible}
				setVisible={setConfirmDialogVisible}
				onSubmitHandler={onSubmitHandler}
			/>
			<ResetButton
				variant="outlined"
				onClick={onResetButtonClick}
				disabled={status === 'loading'}
				color={error ? 'error' : 'primary'}
			>
				Reset selected documents
			</ResetButton>
		</TableWrapper>
	);
};

export default DocumentsPage;
