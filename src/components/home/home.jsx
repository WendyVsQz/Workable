import React, { useEffect, useState } from "react";
import "../footer/style.css";
import SearchBar from "../search/search-bar";
import "./home.css";
import { searchJob } from "../api/job-api";

const Home = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    console.log(jobs);
  }, [jobs]);

  const handleJobSearch = (input) => {
    setJobs(searchJob(input));
  };
  return (
    <>
      <SearchBar label={"Search Youe Next Job"} onClick={handleJobSearch} />
    </>
  );
};
export default Home;
