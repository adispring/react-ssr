import { ActionTypes } from '../actions';
import { reducerCreator } from '../util/redux';

const initialState = {
  repos: [],
  loading: false,
};

export default reducerCreator(ActionTypes, initialState);
