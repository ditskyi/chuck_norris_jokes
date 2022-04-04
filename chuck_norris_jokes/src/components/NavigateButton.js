import React, { Fragment } from 'react';
import { useNavigate } from 'react-router';

export const NavigateButton = ({ link, title }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <button type='button' className='btn btn-outline-secondary' onClick={() => navigate(`/${link}`)}>{title}</button>
    </Fragment>
  )
};