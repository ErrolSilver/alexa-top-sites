import merge from 'lodash/merge';
import { GET_LISTING_DATA_SUCCEEDED, GET_LISTING_DATA_FAILED } from '../constants/siteListing';

const initialState = {
  error: null,
  sites: [],
};

export default function listingReducers(state = initialState, action) {
  switch (action.type) {
    case GET_LISTING_DATA_SUCCEEDED:
      return merge({}, state, action.response);
    case GET_LISTING_DATA_FAILED:
      return merge({}, state, action.response);
    default:
      return state;
  }
}
