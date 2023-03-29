import { Container } from "@mui/system";
import React, { useState } from "react";
import { searchJob } from "../api/job-api";
import { CardComponent } from "../card/card-component";
import "../footer/style.css";
import SearchBar from "../search/search-bar";
import "./home.css";

const Home = () => {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(false)

  const handleJobSearch = (input) => {
    setLoading(true)
    searchJob(input).then((response) => {
      setJobs(response.data.results);
    }).finally(() => setLoading(false));
  };

  return (
    <>
      <SearchBar label={"Search Your Next Job"} onClick={handleJobSearch} loading={loading}/>
      <Container>
        {jobs && jobs.length > 0
          ? jobs.map((job) => <CardComponent job={job} showBookMark={true} />)
          : ""}
      </Container>
    </>
  );
};
export default Home;
