import axios from 'axios';


export function getSalesHistory() {
  return axios.get('/api/sales');
}

export function getSalesItens(saleId) {
  return axios.get(`/api/sales/${saleId}/burgers`);
}

export function saveSale(sale) {
  return axios.post('/api/sales', sale);
}

export function saveItens(sale) {
  const headers = {
    'Content-type': 'text/uri-list',
  };
  axios.put(sale.saleUrl, sale.burgerUriList, { headers });
}
