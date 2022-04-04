import { ADD_JOKE, DELETE_SAVED_JOKE, SAVE_DOWN_JOKE, DELETE_JOKE, GET_CATEGORIES, SAVE_EDITED_JOKE } from "./actionTypes";

const initialState = {
  downJoke: null,
  savedJokes: [],
  categories: [],
  isEditing: false,
}

export const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOKE:
      return { ...state, downJoke: action.payload };
    case DELETE_JOKE:
      return { ...state, downJoke: null };
    case SAVE_DOWN_JOKE:
      let index = state.savedJokes.findIndex(joke => joke.id === action.payload.id);
      if (index === -1)
        return { ...state, savedJokes: state.savedJokes.concat([action.payload]) };
      return state.savedJokes;
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case DELETE_SAVED_JOKE:
      return { ...state, savedJokes: state.savedJokes.filter(joke => action.payload.id !== joke.id) };
    case SAVE_EDITED_JOKE:
      return { ...state, savedJokes: state.savedJokes.map((joke) => joke.id === action.payload.id ? action.payload : joke) };

    default: return state
  }

}