import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { LightbulbOutlined as LightBulb , ArchiveOutlined as Archive ,DeleteOutlined as Delete  } from "@mui/icons-material";
import {Link} from 'react-router-dom';

const NavList = ({ open }) => {


  const listItem = [
    { id: 1, name: "Notes", icon: <LightBulb/> , route:'/'  },
    { id: 2, name: "Archive", icon: <Archive/> , route:'/archive' },
    { id: 3, name: "Delete", icon: <Delete />, route:'/delete'  },
  ];


  return (
    <List>
      
      {
      listItem.map((list) => (
        <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
          
          <ListItemButton
          component={Link}
          to={list.route}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
               
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
