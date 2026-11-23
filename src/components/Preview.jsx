import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const Preview = ({ personalData }) => {
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 3,
          minHeight: 500,
          backgroundColor: "purple",
        }}
      >
        <Typography variant="h5">{personalData?.fullName}</Typography>
        <Typography sx={{ mt: 1 }}>DOB: {personalData?.dob}</Typography>

        <Typography sx={{ mt: 1 }}>Gender: {personalData?.gender}</Typography>

        <Divider sx={{ mt: 2 }} />

        <Typography sx={{ mt: 1 }}>Phone: {personalData?.phone}</Typography>

        <Typography sx={{ mt: 1 }}>Email: {personalData?.email}</Typography>

        <Typography sx={{ mt: 1 }}>Address: {personalData?.address}</Typography>

        <Typography sx={{ mt: 1 }}>City: {personalData?.city}</Typography>

        <Divider sx={{ mt: 2 }} />

        <Typography sx={{ mt: 1 }} variant="h5">
          Personal Details
        </Typography>

        <Typography sx={{ mt: 1 }}>State: {personalData?.state}</Typography>

        <Typography sx={{ mt: 1 }}>
          Nationality: {personalData?.nationality}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Marital Status: {personalData?.maritalStatus}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Languages: {personalData?.languages}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          LinkedIn: {personalData?.linkedInLink}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Preview;
