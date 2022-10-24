import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useField } from 'react-final-form'
import {Autocomplete, Popover, TextField, Tooltip} from "@mui/material";
import {Add, ArrowDropDown, ArrowDropUp, Search} from "@mui/icons-material";
import Button from "./Button";

const sizeMap = {
  full: 'w-full',
  '5xl': 'sm:max-w-xl',
  '4xl': 'sm:max-w-lg',
  '3xl': 'sm:max-w-md',
  '2xl': 'sm:max-w-sm',
  xl: 'sm:max-w-xs',
  lg: 'sm:max-w-64'
}

const PopperComponent = ({ disablePortal, anchorEl, open, ...other }) => <div className="bg-red-700" {...other} />

const AutoCompleteField = ({
  name,
  label,
  hint,
  options,
  defaultOption,
  renderOption,
  size = 'xl',
  margin = 'normal',
  onChange,
  validate,
  boxClassName,
  addButtonClick,
  disabled,
  noOptionsText = 'No se encontraron resultados',
  ...props
}) => {
  const { input } = useField(name, { validate, ...props })
  const [anchorEl, setAnchorEl] = useState(null)
  const [value, setValue] = useState()
  useEffect(() => {
    if (defaultOption && !value) {
      onChange && onChange(defaultOption)
      setValue(options?.find(({ value }) => value === defaultOption.value.toString()))
    }
  }, [anchorEl, defaultOption])

  useEffect(() => {
    if (input) {
      setValue(options?.find(({ id}) => id === input.value))
    }
  }, [input.value])

  const handleChange = (event, newValue, reason) => {
    if (event.type === 'keydown' && event.key === 'Backspace' && reason === 'removeOption') return

    input.onChange(newValue.id)
    onChange && onChange(newValue)
    onClose()
  }

  const onClose = () => {
    if (anchorEl) {
      anchorEl.focus()
    }
    setAnchorEl(null)
  }

  const handleOpenSelect = event => {
    setAnchorEl(event.currentTarget)
  }

  const refDivSelect = useRef()
  const widthPopper = refDivSelect.current?.clientWidth + 4

  const open = !!anchorEl
  const id = open ? 'autocomplete-label' : undefined
  return (
    <div className={clsx('relative', sizeMap[size])}>
      <div className='flex flex-row'>
        {label && (
          <label htmlFor={`${name}-input`} id={`${name}-label`} className="block font-bold mb-1 min-w-25">
            {label}
          </label>
        )}
        {addButtonClick && <Button
          onClick={() => addButtonClick(true)}
        >{<Add/>}</Button>}
      </div>
      <button
        type="button"
        disabled={disabled}
        ref={refDivSelect}
        className={clsx(
          'flex justify-between border-2 border-gray-300 bg-white w-full pl-4 focus:outline-main disabled:bg-neutral-100 disabled:text-gray-600 rounded-md',
          boxClassName
        )}
        onClick={handleOpenSelect}
        data-testid="autocomplete-btn"
      >
        <span>{value ? value.name : 'Selecciona una opción'}</span>
        <div className="mr-px my-auto">{open ? <ArrowDropUp /> : <ArrowDropDown />}</div>
      </button>
      <Popover
        id={id}
        open={open}
        onClose={onClose}
        anchorEl={anchorEl}
        classes={{
          paper: 'border-solid border-l-2 border-r-2 border-b-2 border-t-1 border-gray-800 bg-white w-full'
        }}
        PaperProps={{ style: { width: widthPopper } }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          horizontal: 'center',
          vertical: 'top'
        }}
      >
        <Autocomplete
          open
          disabled={disabled}
          id={`${name}-input`}
          noOptionsText="No se encontraron resultados"
          classes={{ paper: 'm-0', popper: 'max-w-full', listbox: 'max-h-72' }}
          getOptionLabel={option => option.name}
          options={options}
          PopperComponent={PopperComponent}
          onChange={handleChange}
          renderInput={params => (
            <TextField
              autoFocus
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              InputProps={{
                disableUnderline: true,
                className: 'pl-2 rounded-md bg-gray-200',
                startAdornment: <Search classes={{ root: 'text-neutral-500' }} />
              }}
              className={clsx('p-3 w-full')}
            />
          )}
        />
      </Popover>
    </div>
  )
}
export default AutoCompleteField
