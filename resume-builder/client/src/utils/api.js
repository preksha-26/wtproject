import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Auth API calls
export const authAPI = {
  register: (userData) => API.post('/auth/register', userData),
  login: (credentials) => API.post('/auth/login', credentials),
};

// Resume API calls  
export const resumeAPI = {
  getAll: () => API.get('/resumes'),
  create: (resumeData) => API.post('/resumes', resumeData),
  update: (id, resumeData) => API.put(`/resumes/${id}`, resumeData),
  delete: (id) => API.delete(`/resumes/${id}`),
};

export default API;