import { Dispatch, memo, SetStateAction } from 'react';
import { type SxProps } from '@mui/material';
import {
	DataGrid,
	type GridSortModel,
	type GridColDef,
	type GridRowsProp,
	type GridSelectionModel,
	GridSlotsComponent,
} from '@mui/x-data-grid';

interface DataTableProps {
	rows: GridRowsProp;
	columns: GridColDef[];
	loading: boolean;
	sx?: SxProps;
	sortModel?: GridSortModel;
	setSelectionModel: Dispatch<SetStateAction<GridSelectionModel>>;
	error?: string;
	components?: Partial<GridSlotsComponent>;
}

const DataTable = ({
	rows,
	columns,
	loading,
	sx,
	sortModel,
	setSelectionModel,
	error,
	components,
}: DataTableProps) => {
	return (
		<DataGrid
			rows={rows}
			columns={columns}
			loading={loading}
			sx={sx}
			checkboxSelection
			pagination
			autoPageSize
			initialState={{ sorting: { sortModel } }}
			onSelectionModelChange={(newSelectionModel) => {
				setSelectionModel(newSelectionModel);
			}}
			components={components}
			error={error}
		/>
	);
};
export default DataTable;
