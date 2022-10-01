import React, {useRef} from "react";
import {Button as MaterialButton, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper} from "@mui/material";
import useToggle from "../hooks/useToggle";

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge']

const SplitButton = ({
  children,
  variant
}) =>{
  const [state, toggle] = useToggle()
  const anchorRef = useRef(undefined)
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    toggle()
  }

  return(
    <>
      <MaterialButton
        variant={variant}
        onClick={toggle}
        ref={anchorRef}
      >
        {children}
      </MaterialButton>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={state}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={toggle}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
export default SplitButton