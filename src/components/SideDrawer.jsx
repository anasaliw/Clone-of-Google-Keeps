import React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import NavList from './NavList';
// import {DataContext} from './context/DataProvider';
import {Routes,Route } from 'react-router-dom';
import DisplayNotes from './DisplayNotes';
import DeleteNotes from './DeleteNotes/DeleteNotes';
import ArchiveNotes from './ArchiveNotes/ArchiveNotes';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(prevState => !prevState);
  };

  // const { notes } = useContext(DataContext);



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar open={open} handleDrawer={handleDrawerOpen}/>
       
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <NavList open={open}/> 
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
      
        <Routes>
            <Route path='/' element={<DisplayNotes/>} />
            <Route path='/archive' element={<ArchiveNotes/>} />
            <Route path='/delete' element={<DeleteNotes/>} />

        </Routes>
      
     </Box> 
    </Box>
  );
}
