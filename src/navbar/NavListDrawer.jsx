/* eslint-disable react/prop-types */
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const NavListDrawer = ({ navArrayLinks, NavLink, setOpen }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component={ NavLink } to={item.path} onClick={()=> setOpen(false)}>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
