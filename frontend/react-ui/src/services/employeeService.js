import api from '../utils/api';

export const employeeService = {
  getAll: () => api.get('/Employees'),
  getById: (id) => api.get(`/Employees/${id}`),
  create: (employee) => api.post('/Employees', employee),
  update: (id, employee) => api.put(`/Employees/${id}`, employee),
  delete: (id) => api.delete(`/Employees/${id}`),
};