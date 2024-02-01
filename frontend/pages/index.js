import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
} from "@mui/material";

import { Carousel } from "../components";

const Home = () => {
  const titleObject = {
    titleID: "tt1234567",
    type: "movie",
    originalTitle: "Πρωτότυπος τίτλος",
    titlePoster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    startYear: 2021,
    endYear: null,
    genres: ["Drama", "Adventure", "Sci-Fi"],
    genreTitle: "Drama",
    titleAkas: [
      {
        akaTitle: "Διεθνής τίτλος",
        regionAbbrev: "US",
      },
      // ... other alternate titles
    ],
    principals: [
      {
        nameID: "nm0000001",
        name: "Όνομα Συντελεστή",
        category: "director",
        rating: {
          avRating: "7.5",
          nVotes: "15000",
        },
      },
      // ... other principal members
    ],
  };
  const dummyList = [titleObject, titleObject, titleObject, titleObject];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography
            variant="h3"
            color="inherit"
            sx={{
              fontWeight: "600",
              fontSize: "150px",
              letterSpacing: "normal",
              color: "#730000",
              WebkitTextStroke: "1px #000000",
              textAlign: "center",
              margin: "auto",
              width: "fit-content",
            }}
          >
            N T U A F L I X
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ marginTop: 10, paddingLeft: 10 }}
      >
        Featured Movies
      </Typography>
      {false ? (
        <Box
          sx={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
        >
          <Box sx={{ width: 400, height: 400, padding: 2 }}>
            <Skeleton height={400} />
          </Box>
          <Box sx={{ width: 400, height: 400, padding: 2 }}>
            <Skeleton height={400} />
          </Box>
          <Box sx={{ width: 400, height: 400, padding: 2 }}>
            <Skeleton height={400} />
          </Box>
        </Box>
      ) : (
        <Carousel items={dummyList} />
      )}
    </Box>
  );
};

export default Home;
