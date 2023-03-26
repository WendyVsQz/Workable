import { Button, InputAdornment, TextField } from "@mui/material";
import "./search-bar.css";

const SearchBar = ({ label, item, setItem }) => {
  return (
    <>
      <div className="search-bar">
        <TextField
          className="search-bar-input no-outline"
          type="search"
          placeholder={label}
          value={item}
          onChange={(event) => setItem(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" className="search-button">
                  Search
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
