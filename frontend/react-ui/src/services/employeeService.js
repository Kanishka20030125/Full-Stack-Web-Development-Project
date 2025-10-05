import { employeeApi } from '../utils/api';

export const employeeService = {
  getAll: () => employeeApi.get('/api/Employees'),
  getById: (id) => employeeApi.get(`/api/Employees/${id}`),
  create: (employee) => employeeApi.post('/api/Employees', employee),
  update: (id, employee) => employeeApi.put(`/api/Employees/${id}`, employee),
  delete: (id) => employeeApi.delete(`/api/Employees/${id}`),
};