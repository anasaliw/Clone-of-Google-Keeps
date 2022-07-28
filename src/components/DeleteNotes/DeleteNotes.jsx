import React,{useContext} from 'react'
import {Grid} from '@mui/material'
import Empty from '../notes/Empty';
import { DataContext } from '../context/DataProvider';
import DeleteNote from './DeleteNote';
function DeleteNotes() {

    let { deleted }=useContext(DataContext);

    return (
    <>
            {
          deleted.length > 0 ?
        
       ( <Grid container spacing ={2} style={{marginLeft:90,marginTop:20}}>
        {
          deleted.map(data=>(
            <Grid item key={data.id}>
            <DeleteNote  data={data}/>
            </Grid>
          ))
        }
        </Grid>
       )
      : <Empty/>
      }     
    </>
  )
}

export default DeleteNotes;
