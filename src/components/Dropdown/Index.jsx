import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'

const DropdownItemList = [
    {
      value: "recommendation",
      label: "recommendation",
    },
    {
      value: "Price:Low-High",
      label: "Price:Low-High",
    },
    {
      value: "Price:High-Low",
      label: "Price:High-Low",
    },
    {
      value: "popularity",
      label: "popularity",
    },
    {
      value: "Whats New",
      label: "popularity",
    },
  ];

export default function DropdownSortBy() {
  return (
    <>
      <Box
            component="form"
            textAlign="end"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { md: "20ch", lg: "30ch" },
              },
              display: { xs: "none", md: "block" },
              paddingBottom:3,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-select-currency" fullWidth select>
              {DropdownItemList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
    </>
  )
}
