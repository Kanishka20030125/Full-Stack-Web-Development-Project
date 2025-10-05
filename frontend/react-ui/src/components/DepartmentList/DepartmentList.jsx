import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Box,
  Typography,
  Container,
  Tooltip,
  Alert,
  Snackbar,
  LinearProgress,
  Chip
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Business as BusinessIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import { departmentService } from '../../services/departmentService';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = () => {
    setLoading(true);
    departmentService.getAll()
      .then(response => {
        setDepartments(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error loading departments:', error);
        setError('Failed to load departments. Please try again later.');
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete department "${name}"?`)) {
      setLoading(true);
      departmentService.delete(id)
        .then(() => {
          loadDepartments();
          setSnackbar({
            open: true,
            message: 'Department deleted successfully',
            severity: 'success'
          });
        })
        .catch(error => {
          console.error('Error deleting department:', error);
          setSnackbar({
            open: true,
            message: 'Failed to delete department',
            severity: 'error'
          });
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Container maxWidth={false} sx={{ px: 3 }}>
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h4" component="h1">
              Departments
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => navigate('/departments/new')}
            sx={{ borderRadius: 2 }}
          >
            Add Department
          </Button>
        </Box>

        {loading && <LinearProgress sx={{ mb: 2 }} />}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Paper elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {departments.map((department) => (
                  <TableRow 
                    key={department.id}
                    hover
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{department.id}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <BusinessIcon color="action" fontSize="small" />
                        {department.name}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationIcon color="action" fontSize="small" />
                        {department.location}
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit Department">
                        <IconButton
                          color="primary"
                          onClick={() => navigate(`/departments/edit/${department.id}`)}
                          size="small"
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Department">
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(department.id, department.name)}
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
                {departments.length === 0 && !loading && (
                  <TableRow>
                    <TableCell colSpan={4} align="center" sx={{ py: 3 }}>
                      <Typography color="textSecondary">
                        No departments found
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert 
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default DepartmentList;