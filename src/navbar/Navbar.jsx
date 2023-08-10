import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import NavListDrawer from "./NavListDrawer"
import MenuIcon from "@mui/icons-material/menu"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
const Navbar = ({navArrayLinks}) => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={ () => setOpen(true)}
            sx={{display: {xs:"flex", sm: "none"}}}
            edge='start'
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>Bebidas Energeticas</Typography>
          <Box sx={{display: {xs: 'none', sm:'block'}}}>
          {
            // eslint-disable-next-line react/prop-types
            navArrayLinks.map((item) => (
              <Button color="inherit" key={ item.title } component={NavLink} to={item.path}
              >{ item.title }</Button>
            ))
          }
          </Box>
        </Toolbar>
    </AppBar>
        <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{display: {xs:"flex", sm: "none"}}}
        >
            <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
        </Drawer>
    </>
  )
}

export default Navbar