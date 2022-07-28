import React,{useContext} from 'react'
import {Grid} from '@mui/material'
import Empty from './notes/Empty';
import { DataContext } from './context/DataProvider'
import Note from './notes/Note';
import Form from './notes/Form';

function DisplayNotes() {

    const {notes}=useContext(DataContext);

    return (
    <>
        <Form/>

            {
          notes.length > 0 ?
              <Grid container spacing ={2} style={{marginLeft:90,marginTop:20}}>
                    {
                      notes.map((data)=>(
                          
                                <Grid item key={data.id} >
                                        <Note data={data}/>
                                </Grid>
                         
                      ))
                    }
                  </Grid>
             
      : <Empty/>
      }     
    </>
  )
}

export default DisplayNotes
