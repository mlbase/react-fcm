import React, { useState } from 'react';
import AxiosPost from '../util/apiPost';

const Register = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, SetAddress] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    SetAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 회원가입 로직 구현
    if (userId && password && email && phoneNumber && address) {
      // 유효성 검사 등 추가적인 로직 수행 가능
      const body = {
        'user_id': userId,
        'password': password,
        'email': email,
        'phone_number': phoneNumber,
        'address': address
      }
      await AxiosPost(null, body);

      // 회원가입 성공
      setIsRegistered(true);
    } else {
      // 필수 입력 필드 누락 등으로 인한 실패
      setIsRegistered(false);
    }

    // 회원가입 후에 필요한 추가 작업 수행
  };

  if (isRegistered) {
    return <div>회원가입 성공!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디:
        <input type="text" value={userId} onChange={handleUserIdChange} />
      </label>
      <br />
      <label>
        비밀번호:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        이메일:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        핸드폰번호:
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </label>
      <br />
      <label>
        주소:
        <input type="text" value={address} onChange={handleAddressChange} />
      </label>
      <br />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default Register;
