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
      filterList();
    } else {
      setList(list);
    }
  }, [searchInput]);

  const filterList = () => {
    list.map((item) => {
      if (
        item.firstname.toLowerCase().includes(searchInput) ||
        item.lastname.toLowerCase().includes(searchInput) ||
        item.StartDate.includes(searchInput) ||
        item.department.toLowerCase().includes(searchInput) ||
        item.street.toLowerCase().includes(searchInput) ||
        item.birthdate.includes(searchInput) ||
        item.state.toLowerCase().includes(searchInput) ||
        item.ZipCode.includes(searchInput) ||
        item.City.toLowerCase().includes(searchInput)
      ) {
        nouveauTableau.add(item);
      }
      return setList([...nouveauTableau]);
    });
  };

  const handleChange = (e) => {
    // e.preventDefault();
    let normalValue = e.target.value;
    let formatValue = normalValue.toLowerCase();
    console.log(normalValue);
    console.log(formatValue);
    setSearchInput(formatValue);
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
