import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MdModeEdit } from 'react-icons/md';
import { deleteSavedJoke } from '../redux/jokesActions';

export const JokeRow = ({ joke, onEdit }) => {

  const dispatch = useDispatch();
  const handleEditClick = () => {
    onEdit();
  }

  const handleDeleteJoke = useCallback(() => {
    dispatch(deleteSavedJoke(joke));
  }, [])

  return (
    <tr key={joke.id}>
      <td className='col col-value lh-sm ' >{joke.categories}</td>
      <td className='col col-value lh-sm ' >{joke.receivedTime.toLocaleString()}</td>
      <td className='col col-value lh-sm col-size-value' >{joke.value}</td>
      <td className='col col-value lh-sm ' >
        <div className="d-flex justify-content-around align-items-center">
          <button type='button' className='btn btn-outline-secondary btn-sm' onClick={handleEditClick}>
            <MdModeEdit />
          </button>
          <button type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            // TODO: make func delete joke
            onClick={handleDeleteJoke}
          />
        </div>
      </td>
    </tr>
  )
};
