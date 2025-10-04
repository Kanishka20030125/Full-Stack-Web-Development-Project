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
import { departmentService } from '../../services/departmentService';

const DepartmentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    departmentService.getById(id)
      .then(response => {
        reset(response.data);
      })
      .catch(error => {
        console.error('Error loading department:', error);
        navigate('/departments');
      });
  }, [id, reset, navigate]);

  const onSubmit = (data) => {
    departmentService.update(id, data)
      .then(() => {
        navigate('/departments');
      })
      .catch(error => {
        console.error('Error updating department:', error);
      });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Edit Department
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
            label="Location"
            margin="normal"
            {...register('location', { required: 'Location is required' })}
            error={!!errors.location}
            helperText={errors.location?.message}
          />

          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Update Department
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('/departments')}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default DepartmentEdit;