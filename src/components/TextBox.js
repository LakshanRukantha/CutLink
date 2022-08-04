import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./TextBox.css";

export default function FullWidthTextField() {
  return (
    <Box className="text-box-container">
      <TextField
        className="url-area"
        fullWidth
        id="fullWidth"
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
