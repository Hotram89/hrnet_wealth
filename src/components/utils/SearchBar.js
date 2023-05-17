import React, { useEffect } from "react";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({
  list,
  setList,
  filterField = (item) => item,
  ...props
}) => {
  //valeur entrée dans la barre de recherche
  const [searchInput, setSearchInput] = useState("");

  const nouveauTableau = new Set();
  useEffect(() => {
    if (searchInput) {
      setList([...nouveauTableau]);
    }
  }, []);

  const filterList = () => {
    list.map((item) => {
      if (
        item.firstname.includes(searchInput) ||
        item.lastname.includes(searchInput) ||
        item.StartDate.includes(searchInput) ||
        item.department.includes(searchInput) ||
        item.street.includes(searchInput) ||
        item.birthdate.includes(searchInput) ||
        item.state.includes(searchInput) ||
        item.ZipCode.includes(searchInput) ||
        item.City.includes(searchInput)
      ) {
        nouveauTableau.add(item);
      }
      return setList([...nouveauTableau]);
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    filterList();
  };

  return (
    <input
      type="text"
      placeholder="Search here"
      className="searchbar"
      onChange={handleChange}
      value={searchInput}
      {...props}
    />
  );
};

export default SearchBar;
