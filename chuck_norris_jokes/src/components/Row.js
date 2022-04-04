import React, { Fragment, useState } from 'react';
import { EditJokeInRow } from './EditJokeInRow';
import { JokeRow } from './JokeRow';

const Row = ({ joke }) => {
  const [isEditing, setEditing] = useState(false);
  const onEdit = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
  };

  return (
    <Fragment>
      {isEditing
        ? (<EditJokeInRow joke={joke} onSave={onSave} />)
        : (<JokeRow joke={joke} onEdit={onEdit} />)}
    </Fragment>
  )
};

export default Row;