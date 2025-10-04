import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import { employeeService } from '../../services/employeeService';

const EmployeeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    employeeService.getById(id)
      .then(response => {
        reset(response.data);
      })
      .catch(error => {
        console.error('Error loading employee:', error);
        navigate('/employees');
      });
  }, [id, reset, navigate]);

  const onSubmit = (data) => {
    employeeService.update(id, data)
      .then(() => {
        navigate('/employees');
      })
      .catch(error => {
        console.error('Error updating employee:', error);
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Edit Employee
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            label="Department"
            margin="normal"
            {...register('department')}
          />

          <TextField
            fullWidth
            label="Salary"
            margin="normal"
            type="number"
            {...register('salary', { 
              required: 'Salary is required',
              min: {
                value: 0,
                message: 'Salary must be a positive number'
              }
            })}
            error={!!errors.salary}
            helperText={errors.salary?.message}
          />

          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Update Employee
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/employees')}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default EmployeeEdit;