import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { getAllPlaces } from "../actions";
import Loader from "./Loader";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  // get state from store
  const places = useSelector((state) => state.AppReducer.places);
  //   for dispatch
  const dispatch = useDispatch();
  // search term
  const [searchTerm, setSearchTerm] = useState("");
  // search results
  const [searchResults, setSearchResults] = useState([]);
  // get all places
  const getPlaces = () => {
    axios
      .get("https://roadtrippers.herokuapp.com/api/v1/places/")
      .then((res) => res.data.places)
      .then((data) => dispatch(getAllPlaces(data)))
      .catch((err) => console.error(err));
  };
  //   handle input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getPlaces();
  }, []);

  useEffect(() => {
    //   get search results
    const getResults = () => {
      const results = places.filter((place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    };
    getResults();
  }, [searchTerm]);

  return (
    <>
      <div className="search sticky-top">
        <input
          type="text"
          className="form-control"
          placeholder="Seach Place"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {(searchTerm.length > 0 ? searchResults : places).map((place) => (
          <NavLink
            to={`/places/${place.id}`}
            key={place.id}
            activeClassName="active"
            className="nav-link "
          >
            {place.name}
          </NavLink>
        ))}
        {!places.length && <Loader />}
      </div>
    </>
  );
};

export default Sidebar;
