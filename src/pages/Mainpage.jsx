import { Grid, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Preview from "../components/Preview";
import Form from "../components/Form";

const Mainpage = () => {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    nationality: "",
    maritalStatus: "",
    languages: "",
    linkedInLink: "",
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: 4,
        backgroundImage:
          'url("https://template.canva.com/EAHGYWgnl_w/1/0/800w-j9AqO8ZcamY.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="purple"
        mb={1}
      >
        Personal Details Builder
      </Typography>

      <Typography textAlign="center" color="text.secondary" mb={4}>
        Create and preview your personal profile
      </Typography>

      <Grid container spacing={3}>
        <Grid size={6}>
          <Form setPersonalData={setPersonalData} personalData={personalData} />
        </Grid>

        <Grid size={6}>
          <Preview personalData={personalData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mainpage;
