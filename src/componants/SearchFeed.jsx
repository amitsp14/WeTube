import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { fetchFromApi } from "../utils/FetchFromApi";
import { Videos } from "./";
import { useParams  } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm}  = useParams();

  useEffect(() => {

    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => {

        console.error("Error fetching data:", error);
      });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for : <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>


      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;