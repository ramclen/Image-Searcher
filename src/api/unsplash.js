import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization : 'Client-ID OPqrBIuXU139ubyY-m46Mzf4EQvDQz_UoxsgQg2xtUs'
  }
})