import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosLogin from '../util/apiLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
        'username': username,
        'password': password
    };
    await AxiosLogin(body);
    setIsLogin(true);
    navigate('/');

    // 여기서 로그인 처리 로직을 작성합니다.
    // 예를 들어, 서버로 API 요청을 보내거나 로컬 상태를 업데이트하는 등의 작업을 수행할 수 있습니다.

    // 로그인 후에는 필요에 따라 리디렉션을 수행할 수 있습니다.
    // 예를 들어, React Router를 사용하여 특정 페이지로 이동할 수 있습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">사용자명:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
