
import axios from 'axios';

export function getAll() {
  return axios.get('/api/ingredients');
}

export function getById(id) {
  return axios.get('/api/ingredients/', id);
}
