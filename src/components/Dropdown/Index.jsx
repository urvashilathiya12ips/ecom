import { Box, MenuItem, TextField } from '@mui/material'
import React from 'react'

const DropdownItemList = [
    {
      value: "Recommendation",
      label: "Recommendation",
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
      label: "Whats New",
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
            defaultValue="select"
            autoComplete="off"
          >
            <TextField id="outlined-select-currency"  fullWidth select defaultValue="Whats New">
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
