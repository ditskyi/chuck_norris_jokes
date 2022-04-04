import React, { Fragment } from 'react';

export const PageTitle = ({ title }) => {
  return (
    <Fragment>
      <h1 className='text-center'>{title}</h1>
    </Fragment>
  )
};