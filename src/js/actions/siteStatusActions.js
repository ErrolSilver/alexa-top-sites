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
  const defaultPayload = {
    url: siteUrl,
    error: '',
  };

  return (dispatch) => {
    console.log('wew');
    axios.get(`http://${siteUrl}`, {
      timeout: 7000,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(getSiteStatusSuccess(defaultPayload));
        } else {
          dispatch(getSiteStatusError({ url: siteUrl, error: 'timed out' }));
        }
      })
      .catch(() => {
        dispatch(getSiteStatusError({ url: siteUrl, error: 'timed out' }));
      });
  };
}
