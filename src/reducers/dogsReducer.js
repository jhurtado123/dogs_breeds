import dogsApiClient from "../services/dogsApiClient";

const actions = {
  'FETCH_DOG_BREEDS': 'FETCH_DOG_BREEDS',
  'RECEIVE_ERROR': 'RECEIVE_ERROR',
  'RECEIVE_SUCCESS': 'RECEIVE_SUCCESS',
};

const initialState = {
  dogBreeds: [],
  isLoading: false,
  hasError: false,
};

export const fetchDogBreeds = () => ({
  type: actions.FETCH_DOG_BREEDS,
});
export const receivedError = () => ({
  type: actions.FETCH_DOG_BREEDS,
});
export const receiveSuccess = (breeds) => ({
  type: actions.RECEIVE_SUCCESS,
  breeds,
});

export const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DOG_BREEDS:
      return {
        ...state,
        isLoading: true,
      };
    case actions.RECEIVE_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case actions.RECEIVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dogBreeds: action.breeds,
      };
    default:
      return state;
  }
};

export const getDogsBreeds = () => {
  return async dispatch => {
    dispatch(fetchDogBreeds());
    try {
      const {data: {message}} = await dogsApiClient.getAllDogBreeds();
      const parsedBreeds = Object.keys(message).map(breed => ({name: breed, availableImages: 0}));
      dispatch(receiveSuccess(parsedBreeds));
    } catch (e) {
      dispatch(receivedError());
    }
  };
};