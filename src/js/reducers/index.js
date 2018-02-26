import { combineReducers } from 'redux';
import siteStatusReducers from './siteStatus';

const siteListingAppReducers = combineReducers({
  siteStatusReducers,
});

export default siteListingAppReducers;
