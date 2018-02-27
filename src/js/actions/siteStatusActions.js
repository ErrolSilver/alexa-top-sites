import axios from 'axios';
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
  const payLoad = {
    url: siteUrl,
    error: '',
    status: '',
  };

  return (dispatch) => {
    axios.get(`http://${siteUrl}`, {
      timeout: 7000,
    })
      .then((response) => {
        if (response.status === 200) {
          payLoad.status = response.status.toString();
          dispatch(getSiteStatusSuccess(payLoad));
        } else {
          payLoad.status = response.status.toString();
          payLoad.error = {
            message: 'response was a status code other than 200',
          };
          dispatch(getSiteStatusError(payLoad));
        }
      })
      .catch((error) => {
        payLoad.error = error;
        dispatch(getSiteStatusError(payLoad));
      });
  };
}
