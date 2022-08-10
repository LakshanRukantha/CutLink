import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./TextBox.css";

export default function FullWidthTextField() {
  const [url, setUrl] = useState("");
  const [copyText, setCopyText] = useState("");
  const baseUrl = "https://api.shrtco.de/v2/shorten?url=";
  const getUrl = `${baseUrl}${url}`;
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl("Loading...");
    axios
      .get(getUrl)
      .then((response) => {
        // handle success

        Swal.fire({
          title: "Done!",
          text: "URL Shorten Successfully!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Copy To Clipboard",
        }).then((result) => {
          if (result.isConfirmed) {
            alert("copied!");
          }
        });
        setUrl(response.data.result.full_short_link);
      })
      .catch(function (error) {
        // handle error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid URL! Please check the URL and try again.",
        });
      });
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
