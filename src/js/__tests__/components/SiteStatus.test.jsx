import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'jest';
import * as actions from '../../actions/siteStatusActions';
import * as types from '../../constants/siteStatus';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('site status checks', () => {
  afterEach(() => {

  });

  it('only returns true for the isPending value when site request is pending', () => {
    const store = mockStore({
      'google.com': {
        isPending: false,
        isSuccess: false,
        isFailure: false,
        error: '',
        status: '',
        elapsedTime: '',
      },
    });


    const expectedActions = [
      { type: types.GET_SITE_STATUS_PENDING },
    ];

    return store.dispatch(actions.getSiteStatusPending()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('only returns true for the isSuccess value when site code is 200', () => {
    const store = mockStore({
      'mediafire.com': {
        isPending: false,
        isSuccess: false,
        isFailure: false,
        error: '',
        status: '',
        elapsedTime: '',
      },
    });

    const expectedActions = [
      { type: types.GET_SITE_STATUS_SUCCEEDED },
    ];

    return store.dispatch(actions.getSiteStatusSuccess()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('only returns true for the isFailure value when site request fails', () => {
    const store = mockStore({
      'google.com': {
        isPending: false,
        isSuccess: false,
        isFailure: false,
        error: '',
        status: '',
        elapsedTime: '',
      },
    });

    const expectedActions = [
      { type: types.GET_SITE_STATUS_FAILED },
    ];


    return store.dispatch(actions.getSiteStatusError()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
