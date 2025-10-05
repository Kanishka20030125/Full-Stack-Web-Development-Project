import { departmentApi } from '../utils/api';

export const departmentService = {
  getAll: () => departmentApi.get('/api/departments'),
  getById: (id) => departmentApi.get(`/api/departments/${id}`),
  create: (department) => departmentApi.post('/api/departments', department),
  update: (id, department) => departmentApi.put(`/api/departments/${id}`, department),
  delete: (id) => departmentApi.delete(`/api/departments/${id}`),
};