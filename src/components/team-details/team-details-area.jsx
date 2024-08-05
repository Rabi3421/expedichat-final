import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const TeamDetailsArea = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "450px",
        backgroundColor: "white",
        textAlign: "center",
        margin: "50px 0px",
        width: "100%",
      }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          height: "400px",
          backgroundColor: "grey.300",
          textAlign: "center",
          borderRadius: 10,
        }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={800}>
          Split PDF file
        </Typography>
        <Typography variant="body1" gutterBottom style={{ padding: "15px 0" }}>
          Separate one page or a whole set for easy conversion into independent
          PDF files.
        </Typography>
        <Button
          variant="contained"
          component="label"
          startIcon={<UploadFileIcon />}
          sx={{
            backgroundColor: "#42ccb4",
            width: "250px",
            height: "70px",
            fontWeight: "600",
            fontSize: "18px",
            borderRadius: 3,
            "&:hover": { backgroundColor: "#36a89e" },
          }}>
          Upload File
          <input type="file" hidden />
        </Button>
        <Typography
          variant="body1"
          gutterBottom
          style={{ padding: "15px 0", fontSize: "12px" }}>
          Select the document from Document PDF
        </Typography>
      </Stack>
    </Box>
  );
};

export default TeamDetailsArea;
