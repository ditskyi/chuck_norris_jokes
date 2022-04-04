import React from 'react';
import { IoLogoReact } from 'react-icons/io5';
import SavedJokes from '../components/SavedJokes';
import { GetJoke } from '../components/GetJoke';
import JokePreview from '../components/JokePreview';
import { PageTitle } from '../components/PageTitle';
import { NavigateButton } from '../components/NavigateButton';
import './styles.css';

export const JokesPage = () => {

  return (
    <div className="container bg-light bg-gradient">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between ps-4 pe-4">
          <IoLogoReact />
          <NavigateButton link={'about_page'} title={'About page'} />
        </nav>
        <PageTitle title='CHUCK NORRIS JOKES' />
      </header>
      <section>
        <GetJoke />
        <JokePreview />
      </section>
      <section className='pb-1'>
        <h2 className='text-center'>SAVED JOKES</h2>
        <SavedJokes />
      </section>
    </div>
  );
}

