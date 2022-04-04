import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { saveDownJoke } from '../redux/jokesActions';

const Joke = ({ joke }) => {
  const dispatch = useDispatch();
  const onSaveJoke = useCallback(() => dispatch(saveDownJoke(joke)), [joke, dispatch]);
  
  return (
    <div className='card mb-3'>
      <div className='card-body d-flex justify-content-between'>
          <p className='card-title pt-1'>{joke.value}</p>
          <button type="button" className="btn btn-outline-secondary" onClick={onSaveJoke}>Save</button>
      </div>
    </div>
  )
};

export default Joke;