import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import "./Search.css"

type Props = {
  value: string;
  onChange: (value: string) => void;
}

function Search(props: Props) {
  const { value, onChange } = props;
  return (
    <TextField
      classes={{
        root: "search"
      }}
      placeholder="Start typing a pokemon name, Ex: pika"
      variant="standard"
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Search;
