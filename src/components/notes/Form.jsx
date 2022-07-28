import React, { useRef, useState,useContext } from "react";
import { Box, styled, TextField, ClickAwayListener } from "@mui/material";
import {DataContext} from '../context/DataProvider';
import {v4 as uuid} from 'uuid'
const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 10px;
`;

const note={
  id:'',
  heading:'',
  text:'',
}
function Form() {

  let onTextChange=(e)=>{
    setAddNote({...addNote,[e.target.name]:e.target.value})


  }


  const [addNote,setAddNote]=useState({...note,id:uuid()})

  const {setNotes }=useContext(DataContext);

  const [showInput, setShowInput] = useState(false);

  const componentRef = useRef(null);
  
  const onTextAreaClick = () => {
    setShowInput(true);
    componentRef.current.style.minHeight = '80px';
  };

  let ClickAway = () => {
    setShowInput(false);
    componentRef.current.style.minHeight = '30px';
     setAddNote({...note,id:uuid()})
    if(addNote.heading || addNote.text){
      setNotes(prevState=>[addNote,...prevState]);
      
    }
  };
  return (
    <ClickAwayListener onClickAway={ClickAway}>
      <Component ref={componentRef} >
        {showInput && 
          <TextField
            variant="standard"
            placeholder="Title"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            name='heading'
            onChange={(e)=>onTextChange(e)}
            value={addNote.heading}
          />
        }
        <TextField
          variant="standard"
          placeholder="Enter a Note"
          InputProps={{ disableUnderline: true }}
          multiline
          maxRows={Infinity}
          onClick={onTextAreaClick}
          name='text'
          onChange={(e)=>onTextChange(e)}
          value={addNote.text}
        />
      </Component>
    </ClickAwayListener>
  );
}

export default Form;
