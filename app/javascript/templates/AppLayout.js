import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer
} from "@mui/material";
import {Home, PointOfSale} from '@mui/icons-material'
import useToggle from "../hooks/useToggle";
import AdminHeader from "../organisms/AdminHeader";
import {useNavigate} from "react-router-dom";

const PrincipalMenuItems = [
    {
      label: 'Menu principal',
      name: 'principal_menu',
      path: '/',
      icon: <Home/>
    },
    {
      label: 'Ventas',
      name: 'sales',
      path: '/ventas',
      icon: <PointOfSale/>
    },
  ]

export default function AppLayout({
                                    title,
                                    renderHeader,
                                    children,
                                  }) {
  const navigate = useNavigate()
  const [open, toggleOpen] = useToggle()

  return (
    <div className='mx-8'>
      <AdminHeader menuOnClick={toggleOpen}/>
      <SwipeableDrawer anchor='left' open={open} onClose={toggleOpen} onOpen={() => toggleOpen(true)} >
        <Box
          role="presentation"
          onClick={toggleOpen}
          onKeyDown={toggleOpen}
        >
          <List>
            {PrincipalMenuItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
      <main>{children}</main>
    </div>
  );
}
