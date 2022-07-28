import React from 'react'
import { styled } from '@mui/material/styles';
import {AppBar,Toolbar,Typography,IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';



const HeaderBar = styled(AppBar)`
z-index:1201;
background:#fff;
height:70px;
box-shadow:inset 0 -1px 0 0 #dadce0
`
const url='https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

const Navbar = ({open,handleDrawer})=> {
  return (
    
      <HeaderBar position="fixed" open={open}>
        <Toolbar>
          <IconButton            
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
              
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={url} alt='logo' style={{width:30}}  />
          <Typography variant="h6" style={{marginLeft:25,fontSize:24,color:"#586368"}}>
            Keep
          </Typography>
        </Toolbar>
      </HeaderBar>
    
  )
        }


export default Navbar