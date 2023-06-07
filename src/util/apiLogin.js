import axios from 'axios';
import { apiUrl } from '../App';
import { FirebaseSetting, GetCookie } from '../fcm/messaging';



const AxiosLogin = async (Body) => {
    FirebaseSetting();
    const loginUrl = apiUrl + "/v1/accounts/login";
    const cookieValue = GetCookie('deviceToken')
    const Config = { 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-device': cookieValue
      }
    };
    let Payload = new FormData();
    Payload.append('username', Body.username);
    Payload.append('password', Body.password);
    try {
      const response = await axios.post(
        loginUrl, 
        Payload,
        Config
      );
      if(response.status === 200) {
        const token = response.data.access_token;
        const username = response.data.account_name;
        
        sessionStorage.setItem('access_token', `bearer ${token}`);
        sessionStorage.setItem('user_name', `${username}`);
        return
      }
    } catch (error) {
      alert(error);
    }

  

  
}

export default AxiosLogin;