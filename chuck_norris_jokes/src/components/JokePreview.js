import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveDownJoke } from '../redux/jokesActions';

const JokePreview = () => {
  const dispatch = useDispatch();
  const downJoke = useSelector(state => state.jokes.downJoke);
  const onSaveJoke = useCallback(() => dispatch(saveDownJoke(downJoke)), [downJoke, dispatch]);

  if (!downJoke) {
    return <p className='text-center'>You do not have any jokes yet!</p>
  }
  return (
    <div className='card mb-3'>
      <div className='card-body d-flex justify-content-between'>
        <p className='card-title pt-1'>{downJoke.value}</p>
        <button type="button" className="btn btn-outline-secondary" onClick={onSaveJoke}>Save</button>
      </div>
    </div>
  )
};

export default JokePreview;
