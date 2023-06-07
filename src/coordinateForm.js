import React, { useState } from 'react';
import GetCoordinate from './kakao/getGeometric';
import daum from "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const AddressForm = () => {
    const [address, setAddress] = useState('');
    new daum.Postcode({
        oncomplete: function(data) {
            const el = document.querySelector('div.address-form input[name="address"');
            el.innerHTML(data);
        }
    }).open();

    const handleSubmit = async () => {
        const coordinate = await GetCoordinate(address);
        console.log('좌표는:', coordinate);
    };

    const handleChange = (event) => {
        setAddress(event.target.value);
    };

    return (
        <div className='address-form'>
            <input name='address' type='text' value={address} onChange={handleChange} />
            <button onClick={handleSubmit}>검색</button>
        </div>
    );
};

export default AddressForm;
