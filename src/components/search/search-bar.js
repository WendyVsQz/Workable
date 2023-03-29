import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import "./search-bar.css";

const SearchBar = ({ label, onClick, loading }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="search-bar">
        <TextField
          className="search-bar-input no-outline"
          type="search"
          placeholder={label}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  className="search-button"
                  onClick={() => onClick(input)}
                >
                  {loading ? "Loading...": "Search"}
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{
            "& fieldset": { border: "none" },
          }}
        />
      </div>
    </>
  );
};

export default SearchBar;
