import React from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/bootstrap-icons.css'
import '../../global.css'


const Primary = ({ IrPara, label }) => {
  return (
    <Link to={IrPara}>
      <button type='button' className='btn custom-btn smoothscroll mb-2'>{label}</button>
    </Link>
  );
};

export default Primary;
