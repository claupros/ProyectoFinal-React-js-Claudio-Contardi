import React from 'react';
import Button from '@mui/material/Button';
//import ButtonGroup from '@mui/material/ButtonGroup';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import SendIcon from '@mui/icons-material/Send';
// import { ThemeProvider } from '@mui/material/styles';



// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';








export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            NavBar
          </Typography>
          <>
             <Button/>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


//   export default function NavBar() {
      
//     return (
//         <div >
                 
//  <Button variant="contained" href='https://github.com/claupros/ProyectoFinal-React-js-Claudio-Contardi' endIcon={<SendIcon />}>Repo</Button>          
//  <Button variant="contained" endIcon={<AddShoppingCartIcon />}>CARRITO</Button>
           
    
//         </div>
        
//     );
    
     
// }
