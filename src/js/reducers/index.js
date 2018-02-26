import { combineReducers } from 'redux';
import listingReducers from './siteListing';
import siteStatusReducers from './siteStatus';

const siteListingAppReducers = combineReducers({
  listingReducers,
  siteStatusReducers,
});

export default siteListingAppReducers;
