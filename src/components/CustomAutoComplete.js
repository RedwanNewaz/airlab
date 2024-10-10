import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export default function CustomAutoComplete({data, filterData, textFieldLabel}) {
  return (
    <Autocomplete
      onChange={filterData}
      disablePortal
      options={data.map((item) => item.title)}
      sx={{ width: { xs: 200, sm: 300 }, margin: 0 }}
      slotProps={{
        paper: {
          sx: {
            "& .MuiAutocomplete-listbox": {
              "& .MuiAutocomplete-option": {
                textAlign: "left",
                "&:hover": {
                  backgroundColor: "#a6a4a4",
                },
              },
            },
          },
        },
      }}
      renderInput={(params) => (
        <TextField
          sx={{ margin: 0 }}
          {...params}
          label={textFieldLabel}
        />
      )}
    />
  );
}
