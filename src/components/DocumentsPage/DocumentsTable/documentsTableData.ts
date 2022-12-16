import type { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1, },
    { field: 'status', headerName: 'Status', flex: 1, },
    { field: 'sum', headerName: 'Sum', flex: 0.6, },
    { field: 'qty', headerName: 'Quantity', flex: 0.6 },
    { field: 'volume', headerName: 'Volume', flex: 0.6, },
    { field: 'delivery_date', headerName: 'Delivery date', flex: 2 },
    { field: 'currency', headerName: 'Currency', flex: 1, },
    { field: 'summary', headerName: 'Summary', flex: 1, },
];

export { columns }