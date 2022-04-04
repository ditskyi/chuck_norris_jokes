import React from 'react';
import { IoLogoReact } from 'react-icons/io5';
import { PageTitle } from '../components/PageTitle';
import { NavigateButton } from '../components/NavigateButton';

export const AboutPage = () => {

  return (
    <div className='container bg-light bg-gradient'>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between ps-4 pe-4">
          <IoLogoReact />
          <NavigateButton link={'jokes_page'} title={'Jokes page'} />
        </nav>
        <PageTitle title='ABOUT PAGE' />
      </header>
      <div className="d-flex flex-column justify-content-center align-items-center ps-4 pe-4 pb-4">
        <img src="./img/CV.png" className='img-fluid rounded' alt='Denys_Ditskyi_CV' />
      </div>
    </div>
  )
}
