import axios from 'axios';
const api = axios.create({
  baseURL: 'https://supplysaathi.onrender.com/api',
  withCredentials: true,
});
export default api; 