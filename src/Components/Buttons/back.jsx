import React from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/bootstrap-icons.css'
import '../../global.css'


const Back = ({ VoltarPara, label }) => {
  return (
    <Link to={VoltarPara}>
      <button type='button' className='btn custom-btn custom-border-btn custom-btn-bg-red smoothscroll me-2 mb-2'>{label}</button>
    </Link>
  );
};

export default  Back;
