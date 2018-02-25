import { GET_LISTING_DATA_SUCCEEDED, GET_LISTING_DATA_FAILED } from '../constants/siteListing';
import * as exampleResponse from '../../data/data.json';

export function getSitesError(error) {
  return { error, type: GET_LISTING_DATA_FAILED };
}

export function getSitesSuccess(response) {
  return (dispatch) => {
    dispatch({ response, type: GET_LISTING_DATA_SUCCEEDED });
  };
}

export function getSites(dataUrl) {
  return dispatch =>
    fetch(dataUrl)
      .then(() => {
        dispatch(getSitesSuccess(exampleResponse));
        // dispatch(getSitesError(error));
      })
      .catch(() => {
        // console.log('call failed');
      });
}
