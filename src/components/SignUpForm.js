import React from 'react';
import {
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Typography,
  Container,
  Grid,
  Paper,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { Formik, Form } from 'formik';
import { currentSchema } from '../schema/SignUpSchema';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
  const beardOptions = ['Clean Shaven', 'Stubble', 'Beard', 'Goatee'];
  const hairOptions = ['Short', 'Medium', 'Long', 'Bald'];
  const dressOptions = ['Casual', 'Formal', 'Traditional'];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    beard: '',
    hair: '',
    dress: '',
  };
  const navigate = useNavigate();
  const validate = (values) => {
    try {
      currentSchema.parse(values); // Use Zod to validate the values
    } catch (error) {
      return error.formErrors.fieldErrors; // Return the field errors if validation fails
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    navigate('submit')
    
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" error={Boolean(touched.gender && errors.gender)}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                    {Boolean(touched.gender && errors.gender) && (
                      <Typography color="error">{errors.gender}</Typography>
                    )}
                  </FormControl>
                </Grid>

                {/* Conditional fields for male */}
                {values.gender === 'male' && (
                  <>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Beard</InputLabel>
                        <Select
                          name="beard"
                          value={values.beard}
                          onChange={handleChange}
                          error={Boolean(touched.beard && errors.beard)}
                        >
                          {beardOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {Boolean(touched.beard && errors.beard) && (
                          <Typography color="error">
                            {errors.beard}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Hair</InputLabel>
                        <Select
                          name="hair"
                          value={values.hair}
                          onChange={handleChange}
                          error={Boolean(touched.hair && errors.hair)}
                        >
                          {hairOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {Boolean(touched.hair && errors.hair) && (
                          <Typography color="error">
                            {errors.hair}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Dress</InputLabel>
                        <Select
                          name="dress"
                          value={values.dress}
                          onChange={handleChange}
                          error={Boolean(touched.dress && errors.dress)}
                        >
                          {dressOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                        {Boolean(touched.dress && errors.dress) && (
                          <Typography color="error">
                            {errors.dress}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};
