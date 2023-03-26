import React, { useState } from "react";
import "../footer/style.css";
import SearchBar from "../search/search-bar";
import "./home.css";

const Home = () => {
  const [search, setSearch] = useState();
  return (
    <>
      <SearchBar
        label={"Search Youe Next Job"}
        item={search}
        setItem={setSearch}
      />
    </>
  );
};
export default Home;
