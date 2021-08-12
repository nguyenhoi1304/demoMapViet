import React from 'react';


const  hotline = (props) => {
  return (
    <div className='container__hotline'>
     <h2>kết nối với chúng tôi</h2>
      <ul className= "Hot-line">
        <li>
          Thông tin địa chỉ: Địa chỉ: 271 Đ. Trần Hưng Đạo, An Hải Bắc, Sơn Trà, Đà Nẵng 550000
        </li>
        <li>
          Điện thoại: 0236 3811 678
        </li>
        <li>
          Email:info@iotlink.com.vn
        </li>
        <li>
          link Google: iotlink.com.vn
        </li>

      </ul>
     
      {props.children}
    </div>
  );
}

export default hotline;
