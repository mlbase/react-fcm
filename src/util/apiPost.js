import axios from 'axios';
import { apiUrl } from '../App';

const AxiosPost = async (Headers, Body) => {

    try {
      const response = await axios.post(
        apiUrl, 
        Body,
        {headers: Headers}
    );
      if(response.status == 200) {
        return "success";
      }
    } catch (error) {
      alert(error);
    }

  

  
}

export default AxiosPost;