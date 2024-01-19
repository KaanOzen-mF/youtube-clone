import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Button } from "@mui/material"; //The Paper component is a container for displaying content on an elevated surface. | Buttons allow users to take actions, and make choices, with a single tap.
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button type="submit" sx={{ p: "10", color: "red" }}>
        <Search />
      </Button>
    </Paper>
  );
}

export default SearchBar;
