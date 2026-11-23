
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Form = ({ setPersonalData, personalData }) => {

  const steps = [
    "Basic Information",
    "Contact Details",
    "Personal Details",
    "Review & Submit",
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderForm = () => {
    switch (activeStep) {

      case 0:
        return (
          <>
            <Typography variant="h4">Basic Information</Typography>

            <TextField
              onChange={(e) => setPersonalData({...personalData, fullName:e.target.value})}
              value={personalData.fullName}
              sx={{ width: "100%", mb: 1 }}
              label="Full Name"
              variant="outlined"
            />
            <TextField  onChange={(e) => setPersonalData({...personalData, dob:e.target.value})}
              value={personalData.dob}
              sx={{ width: "100%", mb: 1 }}
              label="DOB"
              variant="outlined"/>


            <FormControl fullWidth variant="outlined" sx={{ mb: 1 }}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={personalData.gender}
                onChange={(e) => setPersonalData({...personalData, gender:e.target.value})}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </>
        );

      case 1:
        return (
          <>
            <Typography variant="h4">Contact Details</Typography>

            <TextField
              onChange={(e) => setPersonalData({...personalData, email:e.target.value})}
              value={personalData.email}
              sx={{ width: "100%", mb: 1 }}
              label="Email"
              variant="outlined"
            />

            <TextField
              onChange={(e) => setPersonalData({...personalData, phone:e.target.value})}
              value={personalData.phone}
              sx={{ width: "100%", mb: 1 }}
              label="Contact Number"
              variant="outlined"
            />

            <TextField
              onChange={(e) => setPersonalData({...personalData, address:e.target.value})}
              value={personalData.address}
              sx={{ width: "100%", mb: 1 }}
              label="Address"
              variant="outlined"
            />

            <TextField
              onChange={(e) => setPersonalData({...personalData, city:e.target.value})}
              value={personalData.city}
              sx={{ width: "100%", mb: 1 }}
              label="City"
              variant="outlined"
            />
          </>
        );

      case 2:
        return (
          <>
            <Typography variant="h4">Personal Details</Typography>

            <TextField
              onChange={(e) => setPersonalData({...personalData, state:e.target.value})}
              value={personalData.state}
              sx={{ width: "100%", mb: 1 }}
              label="State"
              variant="outlined"
            />

            <TextField
              onChange={(e) => setPersonalData({...personalData, nationality:e.target.value})}
              value={personalData.nationality}
              sx={{ width: "100%", mb: 1 }}
              label="Nationality"
              variant="outlined"
            />


            <FormControl fullWidth variant="outlined" sx={{ mb: 1 }}>
              <InputLabel>Marital Status</InputLabel>
              <Select
                value={personalData.maritalStatus}
                onChange={(e) => setPersonalData({...personalData, maritalStatus:e.target.value})}
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Married">Married</MenuItem>
              </Select>
            </FormControl>

            <TextField
              onChange={(e) => setPersonalData({...personalData, languages:e.target.value})}
              value={personalData.languages}
              sx={{ width: "100%", mb: 1 }}
              label="Languages"
              variant="outlined"
            />

            <TextField
              onChange={(e) => setPersonalData({...personalData, linkedInLink:e.target.value})}
              value={personalData.linkedInLink}
              sx={{ width: "100%", mb: 1 }}
              label="LinkedIn Link"
              variant="outlined"
            />
          </>
        );

      case 3:
        return (
          <>
            <Typography variant="h6">
              Review Your Personal Details.
              Check your information in the Preview section before submitting.
            </Typography>
          </>
        );

      default:
        break;
    }
  };

  return (
    
  <Box sx={{
    width: "100%",
    backgroundColor: "white",
    p: 3,
    borderRadius: 3,
    boxShadow: 4,
    minHeight: 500
  }}>

      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All Steps Completed
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Start Again</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {activeStep + 1}
          </Typography>

          {renderForm()}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />

            <Button
  variant="contained"
  onClick={handleNext}
  sx={{
    backgroundColor: "purple",
    "&:hover": { backgroundColor: "purple" }
  }}
>
  {activeStep === steps.length - 1 ? "Finish" : "Next"}
</Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Form;
