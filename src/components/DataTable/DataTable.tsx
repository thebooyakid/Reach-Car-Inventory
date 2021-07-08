import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'firstName', headerName: 'First name', width: 230 },
  { field: 'lastName', headerName: 'Last name', width: 230 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 190,
  },
];

const rows = [
  { id: 1, lastName: 'Jones', firstName: 'Carguy', age: 35 },
  { id: 2, lastName: 'Smith', firstName: 'Bill', age: 42 },
  { id: 3, lastName: 'Williams', firstName: 'Willy', age: 45 },
  { id: 4, lastName: 'Lopez', firstName: 'Lilly', age: 16 },
  { id: 5, lastName: 'Frederickson', firstName: 'Freddy', age: null },
  { id: 6, lastName: 'Wells', firstName: 'Wallace', age: 150 },
  { id: 7, lastName: 'GravyBoat', firstName: 'BigDome', age: 44 },
  { id: 8, lastName: 'TeapotHead', firstName: 'IGotta', age: 36 },
  { id: 9, lastName: 'SparkleDude', firstName: 'Jazzy', age: 65 },
];

export const DataTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>Cars in Inventory</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}