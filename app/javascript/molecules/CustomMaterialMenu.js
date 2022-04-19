import React from 'react';
import {Divider, IconButton, ListItemIcon, Menu, MenuItem, Typography} from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore'

const CustomMaterialMenu = ({ row, onDeleteRow, size, onUpdateRow }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteRow = () => {
    if (onDeleteRow) {
      onDeleteRow(row.id);
    }
  };
  const updateRow = () => {
    if (onUpdateRow) {
      onUpdateRow(row);
    }
  };

  return (
    <div>
      <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick} size={size}>
        <ExpandMore />
      </IconButton>
      <Menu
        id="menu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={updateRow}>Editar</MenuItem>
        <Divider />
        <MenuItem onClick={deleteRow}>
          <ListItemIcon>
            {/*<DeleteIcon fontSize="small" color="secondary" />*/}
          </ListItemIcon>
          <Typography variant="inherit">Eliminar</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default CustomMaterialMenu
