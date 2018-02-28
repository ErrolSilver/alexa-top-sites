import axios from 'axios';
import elapsedTime from 'elapsed-time';
import { GET_SITES, GET_SITE_STATUS_PENDING, GET_SITE_STATUS_FAILED, GET_SITE_STATUS_SUCCEEDED } from '../constants/siteStatus';

export function initializeGetSiteStatus(sites) {
  return (dispatch) => {
    dispatch({ sites, type: GET_SITES });
  };
}

export function getSiteStatusPending(response) {
  return (dispatch) => {
    dispatch({ response, type: GET_SITE_STATUS_PENDING });
  };
}

export function getSiteStatusError(response) {
  return (dispatch) => {
    dispatch({ response, type: GET_SITE_STATUS_FAILED });
  };
}

export function getSiteStatusSuccess(response) {
  return (dispatch) => {
    dispatch({ response, type: GET_SITE_STATUS_SUCCEEDED });
  };
}

export function getSiteStatus(siteUrl) {
  const payload = {
    url: siteUrl,
    error: '',
    status: '',
    elapsedTime: 0,
    headers: {},
  };
  const elapsedRequestTime = elapsedTime.new().start();

  return (dispatch) => {
    axios.get(`http://${siteUrl}`, {
      timeout: 7000,
    })
      .then((response) => {
        payload.headers = response.headers;

        if (response.status === 200) {
          payload.status = response.status.toString();
          payload.elapsedTime = elapsedRequestTime.getValue();
          dispatch(getSiteStatusSuccess(payload));
          
        } else {
          payload.status = response.status.toString();
          payload.error = {
            message: 'response was a status code other than 200',
          };
          payload.elapsedTime = elapsedRequestTime.getValue();
          dispatch(getSiteStatusError(payload));
        }
      })
      .catch((error) => {
        payload.error = error;
        payload.elapsedTime = elapsedRequestTime.getValue();
        dispatch(getSiteStatusError(payload));
      });
  };
}
