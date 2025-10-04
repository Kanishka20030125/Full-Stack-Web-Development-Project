import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.jsx';
import EmployeeList from './components/EmployeeList/EmployeeList.jsx';
import EmployeeForm from './components/EmployeeForm/EmployeeForm.jsx';
import EmployeeEdit from './components/EmployeeEdit/EmployeeEdit.jsx';
import DepartmentList from './components/DepartmentList/DepartmentList.jsx';
import DepartmentForm from './components/DepartmentForm/DepartmentForm.jsx';
import DepartmentEdit from './components/DepartmentEdit/DepartmentEdit.jsx';

import './index.css';

const theme = createTheme();

// Define the application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/employees" replace /> }, // Default route
      { path: "employees", element: <EmployeeList /> },
      { path: "employees/new", element: <EmployeeForm /> },
      { path: "employees/edit/:id", element: <EmployeeEdit /> },
      { path: "departments", element: <DepartmentList /> },
      { path: "departments/new", element: <DepartmentForm /> },
      { path: "departments/edit/:id", element: <DepartmentEdit /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);