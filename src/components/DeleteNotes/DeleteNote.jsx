import {
    CardActions,
    CardContent,
    Typography,
    styled,
    Card,
  } from "@mui/material";
  import React, { useContext } from "react";
  import { DataContext } from "../context/DataProvider";
  
  import {
    RestoreFromTrashOutlined as Restore,
    DeleteOutlined as Delete,
  } from "@mui/icons-material";



  
  function DeleteNote({ data }) {
    const { deleted, setNotes, setDelete } = useContext(
      DataContext
    );
  
    const clickOnArchive = (id) => {
      let updatedState = deleted.filter((data) => data.id !== id);
      setDelete(updatedState);
      setNotes((prevState) => [data, ...prevState]);
    };
  
    const clickOnDelete = (id) => {
      let updatedState = deleted.filter((data) => data.id !== id);
      setDelete(updatedState);
      // setDelete((prevState) => [data, ...prevState]);
  
    };
  
    const CardComp = styled(Card)`
      width: 240px;
      box-shadow: none;
      border: 1px solid #e0e0e0;
      margin-top: 20px;
      border-radius: 8px;
    `;
  
    return (
      <CardComp>
        <CardContent>
          <Typography>{data.heading}</Typography>
          <Typography>{data.text}</Typography>
        </CardContent>
        <CardActions>
          <Restore
            fontSize="small"
            style={{ marginLeft: "auto" }}
            onClick={() => clickOnArchive(data.id)}
          />
          <Delete onClick={() => clickOnDelete(data.id)} fontSize="small" />
        </CardActions>
      </CardComp>
    );
  }
  
  export default DeleteNote;
  