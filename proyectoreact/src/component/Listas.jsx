import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SendIcon from '@mui/icons-material/Send';



const Listas = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ir a Repositorio" />
                    </ListItem>

                    <ListItem button>
                    <ListItemIcon>
                        <AddShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Carrito" />
                </ListItem>
                 <Divider/>
            </List>
        </div>
    )
}

export default Listas
