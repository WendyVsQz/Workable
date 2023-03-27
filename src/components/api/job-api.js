import axios from "axios";

export const searchJob = (title) =>
  axios.get("/api/1.0/search", {
    headers: {
      Authorization:
        "Basic Yzc5YmE0MTgtNGNkNi00Y2FjLTk5NDUtODUwZWNjYzU2ZTJmOg==",
    },
    params: {
      keywords: title,
      location: "London",
    },
  });
