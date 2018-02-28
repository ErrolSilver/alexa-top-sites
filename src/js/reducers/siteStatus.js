import merge from 'lodash/merge';
import { GET_SITES, GET_SITE_STATUS_PENDING, GET_SITE_STATUS_FAILED, GET_SITE_STATUS_SUCCEEDED } from '../constants/siteStatus';

const initialState = {};
export default function siteStatusReducers(state = initialState, action) {
  switch (action.type) {
    case GET_SITES:
      return merge({}, state, action.sites.reduce((allSites, site) => {
        allSites[site] = {
          isPending: true,
          isFailure: false,
          isSuccess: false,
          error: '',
          status: '',
          elapsedTime: '0',
          headers: {},
        };
        return allSites;
      }, {}));
    case GET_SITE_STATUS_PENDING:
      return merge({}, state, {
        [action.response.url]: {
          isPending: true,
          isFailure: false,
          isSuccess: false,
          error: '',
          status: '',
          elapsedTime: '0',
          headers: {},
        },
      });
    case GET_SITE_STATUS_FAILED:
      return merge({}, state, {
        [action.response.url]: {
          isPending: false,
          isSuccess: false,
          isFailure: true,
          error: action.response.error.message,
          status: action.response.status,
          elapsedTime: action.response.elapsedTime,
          headers: action.response.headers || {},
        },
      });
    case GET_SITE_STATUS_SUCCEEDED:
      return merge({}, state, {
        [action.response.url]: {
          isPending: false,
          isSuccess: true,
          isFailure: false,
          error: '',
          status: action.response.status,
          elapsedTime: action.response.elapsedTime,
          headers: action.response.headers || {},          
        },
      });
    default:
      return state;
  }
}
