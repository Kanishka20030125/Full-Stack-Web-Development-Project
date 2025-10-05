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
  Chip,
  Avatar
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { employeeService } from '../../services/employeeService';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    setLoading(true);
    employeeService.getAll()
      .then(response => {
        setEmployees(response.data);
        setError(null);
      })
      .catch(error => {
        console.error('Error loading employees:', error);
        setError('Failed to load employees. Please try again later.');
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      setLoading(true);
      employeeService.delete(id)
        .then(() => {
          loadEmployees();
          setSnackbar({
            open: true,
            message: 'Employee deleted successfully',
            severity: 'success'
          });
        })
        .catch(error => {
          console.error('Error deleting employee:', error);
          setSnackbar({
            open: true,
            message: 'Failed to delete employee',
            severity: 'error'
          });
        })
        .finally(() => setLoading(false));
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 6, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <PersonIcon sx={{ color: 'primary.main', fontSize: 28 }} />
              <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
                Employees
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => navigate('/employees/new')}
              sx={{ borderRadius: 2, textTransform: 'none' }}
            >
              Add Employee
            </Button>
          </Box>

        {loading && <LinearProgress sx={{ mb: 2 }} />}

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Paper elevation={3} sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: (theme) => theme.shadows[6] }}>
          <Box sx={{ px: 3, py: 2, borderBottom: '1px solid', borderColor: 'divider', background: (theme) => theme.palette.background.paper }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Employee Directory</Typography>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow 
                    key={employee.id}
                    hover
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{employee.id}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonIcon color="action" />
                        {employee.name}
                      </Box>
                    </TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>
                      <Chip 
                        label={employee.department}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{formatCurrency(employee.salary)}</TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit Employee">
                        <IconButton
                          color="primary"
                          onClick={() => navigate(`/employees/edit/${employee.id}`)}
                          size="small"
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete Employee">
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(employee.id, employee.name)}
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
                {employees.length === 0 && !loading && (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                      <Typography color="textSecondary">
                        No employees found
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
    </Box>
    </Container>
  );
};

export default EmployeeList;