import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAsync, getJokeAsync } from '../redux/jokesActions';

export function GetJoke() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.jokes.categories);
  const [selectedCategory, setSelectedCategory] = useState('');

  const submitCategoryHandler = useCallback(() => dispatch(getJokeAsync(selectedCategory)), [selectedCategory]);
  const handlerSelectCategory = useCallback((event) => setSelectedCategory(event.target.value), [selectedCategory]);

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <h2>CHOOSE CATEGORY</h2>
        <select name="category" className="form-select-sm ms-1" id='category' aria-label=".form-select-sm example" onChange={handlerSelectCategory} >
          <option value=''>random</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <button type='button' className='btn btn-primary mb-2' onClick={submitCategoryHandler}>Get a joke</button>
    </div>
  )
};
