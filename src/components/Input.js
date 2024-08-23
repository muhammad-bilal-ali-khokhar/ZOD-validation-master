import React from 'react';
import { TextField } from '@mui/material';

const Input = (index, value, onChange, error, Inputtype = 'text') => {
  return (
    <div className="mb-4">
      <TextField
        type={Inputtype}
        label={`Description ${index + 1}`}
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        error={!!error}
        helperText={error || ''}
        fullWidth
        margin="normal"
      />
    </div>
  );
};

export default Input;
