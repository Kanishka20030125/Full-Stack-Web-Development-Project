import api from '../utils/api';

export const departmentService = {
  getAll: () => api.get('/departments'),
  getById: (id) => api.get(`/departments/${id}`),
  create: (department) => api.post('/departments', department),
  update: (id, department) => api.put(`/departments/${id}`, department),
  delete: (id) => api.delete(`/departments/${id}`),
};