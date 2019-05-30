
import axios from 'axios';

export function getAll() {
  return axios.get('/api/burgers');
}

export function getById(id) {
  return axios.get('/api/burgers/', id);
}

export function getIngredientsFromBurger(url) {
  return axios.get(url);
}
