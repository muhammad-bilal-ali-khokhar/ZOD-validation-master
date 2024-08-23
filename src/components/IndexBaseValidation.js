import React, { useState } from 'react';
import { z } from 'zod';
import { Button, Container, Typography, Stack, Box, TextField } from '@mui/material';

// Define the schema using Zod
const descriptionSchema = z.array(
  z.object({
    description: z.string().min(1, 'Description is required'),
  })
);

export const IndexBaseValidation = () => {
  // State for dynamic description inputs
  const [descriptions, setDescriptions] = useState([{ description: '' }]);
  const [errors, setErrors] = useState([]);

  // Add a new description field
  const addDescriptionField = () => {
    setDescriptions([...descriptions, { description: '' }]);
  };

  // Handle description input change
  const handleDescriptionChange = (index, event) => {
    const { value } = event.target;
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index].description = value;
    setDescriptions(updatedDescriptions);
  };

  // Handle form submission
  const handleSubmit = () => {
    try {
      // Validate descriptions using Zod
      descriptionSchema.parse(descriptions);
      setErrors([]);
      alert('Data satisfied the schema');
    } catch (e) {
      if (e instanceof z.ZodError) {
        const fieldErrors = e.errors.reduce((acc, error) => {
          if (error.path.length > 0) {
            const fieldIndex = error.path[0];
            acc[fieldIndex] = acc[fieldIndex] || {};
            acc[fieldIndex][error.path[1]] = error.message;
          }
          return acc;
        }, []);

        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Description Validation
      </Typography>

      <Stack spacing={2}>
        {descriptions.map((desc, index) => (
          <Box key={index} sx={{ position: 'relative' , display:"flex", alignItems:"center", justifyContent:"center"}}>
            <TextField
              fullWidth
              name={`descriptions.${index}.description`}
              label="Description"
              value={desc.description}
              onChange={(event) => handleDescriptionChange(index, event)}
              error={Boolean(errors[index]?.description)}
              helperText={errors[index]?.description}
            />
            <Button
              type="button"
              style={{padding:'15px 14px'}}
              variant="outlined"
              color="error"
              onClick={() => setDescriptions(descriptions.filter((_, i) => i !== index))}
              sx={{ position: 'absolute', right: 0, top: 0 }}
            >
              Remove
            </Button>
          </Box>
        ))}
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={addDescriptionField}
          fullWidth
        >
          Add Description
        </Button>
        <Box mt={2}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
          >
            Check Validation
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
