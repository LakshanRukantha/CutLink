import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./TextBox.css";

export default function FullWidthTextField() {
  const [url, setUrl] = useState("");
  const baseUrl = "https://api.shrtco.de/v2/shorten?url=";
  const getUrl = `${baseUrl}${url}`;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(getUrl)
      .then(function (response) {
        // handle success
        setUrl(response.data.result.full_short_link);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    setUrl("");
  };

  return (
    <Box className="text-box-container">
      <TextField
        className="url-area"
        fullWidth
        id="fullWidth"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        placeholder="Paste long url and shorten it"
        size="small"
        helperText="Ex: http://example.com/"
        sx={{
          [`& fieldset`]: {
            borderRadius: 50,
          },
        }}
      />
      <Box className="btn-box">
        <Button
          className="btn"
          onClick={handleSubmit}
          variant="contained"
          style={{
            borderRadius: 50,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          Shorten
        </Button>
      </Box>
    </Box>
  );
}
