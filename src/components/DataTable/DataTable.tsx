import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { CarForm } from '../../components/CarForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'make', headerName: 'Make', width: 230 },
  { field: 'model', headerName: 'Model', width: 230 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 190,
  // },
];

// const rows = [
//   { id: 1, lastName: 'Jones', firstName: 'Carguy', age: 35 },
//   { id: 2, lastName: 'Smith', firstName: 'Bill', age: 42 },
//   { id: 3, lastName: 'Williams', firstName: 'Willy', age: 45 },
//   { id: 4, lastName: 'Lopez', firstName: 'Lilly', age: 16 },
//   { id: 5, lastName: 'Frederickson', firstName: 'Freddy', age: null },
//   { id: 6, lastName: 'Wells', firstName: 'Wallace', age: 150 },
//   { id: 7, lastName: 'GravyBoat', firstName: 'BigDome', age: 44 },
//   { id: 8, lastName: 'TeapotHead', firstName: 'IGotta', age: 36 },
//   { id: 9, lastName: 'SparkleDude', firstName: 'Jazzy', age: 65 },
// ];
interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable = () => {
  let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }

  console.log(gridData.data.id)
  
  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>Cars in Inventory</h2>
      <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection />
      <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Car Car</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Car</DialogContentText>
              <CarForm id={gridData.data.id!}/>
          </DialogContent>
          <DialogActions>
            <Button onClick = {handleClose} color = "primary">Cancel</Button>
            <Button onClick = {handleClose} color = "primary">Done</Button> 
          </DialogActions>
        </Dialog>
    </div>
  );
}


