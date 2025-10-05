import axios from 'axios';

export const employeeApi = axios.create({
  baseURL: 'http://localhost:5263',  // Direct URL without /api
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

export const departmentApi = axios.create({
  baseURL: 'http://localhost:8082',  // Java Spring Boot backend
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});