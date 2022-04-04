import { ADD_JOKE, DELETE_JOKE, DELETE_SAVED_JOKE, SAVE_DOWN_JOKE, SAVE_EDITED_JOKE, GET_CATEGORIES } from "./actionTypes";

export function addJoke(joke) {
  return {
    type: ADD_JOKE,
    payload: joke,
  }
};

export function deleteJoke() {
  return {
    type: DELETE_JOKE,
  }
};

export function deleteSavedJoke(joke) {
  return {
    type: DELETE_SAVED_JOKE,
    payload: joke,
  }
};

export function saveEditedJoke(joke) {
  return {
    type: SAVE_EDITED_JOKE,
    payload: joke,
  }
};

export function saveDownJoke(joke) {
  return dispatch => {
    if (joke.categories === '') {
      const newJoke = { ...joke, categories: 'random' };
      dispatch({
        type: SAVE_DOWN_JOKE,
        payload: newJoke,
      })
    } else
      dispatch({
        type: SAVE_DOWN_JOKE,
        payload: joke,
      })
    dispatch(deleteJoke());
  }
};

export function getJokeAsync(category) {
  return async dispatch => {
    const urlParams = category ? `?category=${category}` : '';
    const response = await fetch(`https://api.chucknorris.io/jokes/random${urlParams}`);
    const json = await response.json();
    const newJoke = { ...json, categories: json.categories.toString(), receivedTime: new Date() };
    dispatch(addJoke(newJoke));
  }
};

export function getCategoriesAsync() {
  return async dispatch => {
    const response = await fetch('https://api.chucknorris.io/jokes/categories');
    const json = await response.json();
    dispatch({
      type: GET_CATEGORIES,
      payload: json,
    })
  }
};
