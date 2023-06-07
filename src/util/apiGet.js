import axios from 'axios';
import { apiUrl } from '../App';

const AxiosGet = async (params, Headers) => {

    try {
      const response = await axios.get(apiUrl, params ,{headers: Headers});
      const data = response.data;  
      return data;
    } catch (error) {
      alert(error);
    }

  

  
}

export default AxiosGet;
