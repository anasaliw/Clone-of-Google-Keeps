import React,{useContext} from 'react'
import {Grid} from '@mui/material'
import Empty from '../notes/Empty';
import { DataContext } from '../context/DataProvider';
import ArchiveNote from './ArchiveNote';
function ArchiveNotes() {

    const {archive}=useContext(DataContext);

    return (
    <>
            {
          archive.length > 0 ?
        
       ( <Grid container spacing ={2} style={{marginLeft:90,marginTop:20}}>
        {
          archive.map(data=>(
            <Grid item  key={data.id}>
            <ArchiveNote  data={data}/>
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

export default ArchiveNotes
