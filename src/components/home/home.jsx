import React, { useEffect, useState } from "react";
import "../footer/style.css";
import SearchBar from "../search/search-bar";
import "./home.css";
import { searchJob } from "../api/job-api";
import { Container } from "@mui/system";
import { CardComponent } from "../card/card-component";

const Home = () => {
  const [jobs, setJobs] = useState();

  const handleJobSearch = (input) => {
    searchJob(input).then((response) => {
      setJobs(response.data.results);
    });
  };

  return (
    <>
      <SearchBar label={"Search Youe Next Job"} onClick={handleJobSearch} />
      <Container>
        {jobs && jobs.length > 0
          ? jobs.map((job) => <CardComponent {...{ job }} />)
          : ""}
      </Container>
    </>
  );
};
export default Home;
