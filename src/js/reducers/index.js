import { combineReducers } from 'redux';
import listingReducers from './siteListing';

const siteListingAppReducers = combineReducers({
  listingReducers,
});

export default siteListingAppReducers;
