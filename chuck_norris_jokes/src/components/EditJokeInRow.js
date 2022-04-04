import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEditedJoke } from '../redux/jokesActions';

export const EditJokeInRow = ({ joke, onSave }) => {
  const dispatch = useDispatch();
  const [jokeValue, setJokeValue] = useState(joke.value);

  const handleCancelClick = () => {
    onSave();
  };

  const handleEditJokeSubmit = () => {
    dispatch(saveEditedJoke({ ...joke, value: jokeValue }));
    onSave();
  };

  const handleEditJokeChange = (event) => {
    setJokeValue(event.target.value);
  };

  return (
    <tr>
      <td className='col col-value lh-sm'>
        <span>{joke.categories}</span>
      </td>
      <td className='col col-value lh-sm' >
        <span>{joke.receivedTime.toLocaleString()}</span>
      </td>
      <td className='col col-value lh-sm' >
        <textarea className='textarea' required='required' name='value' value={jokeValue} onChange={handleEditJokeChange} />
      </td>
      <td className='col col-value lh-sm' >
        <div className="d-flex justify-content-around align-items-center">
          <button type='button' className='btn btn-outline-secondary btn-sm' onClick={handleEditJokeSubmit}>
            Save
          </button>
          <button type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  )
};
