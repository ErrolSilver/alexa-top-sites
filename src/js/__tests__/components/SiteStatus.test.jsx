import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SiteStatus from '../../components/SiteStatus';

enzyme.configure({ adapter: new Adapter() });

const setup = (setupProps = {}) => {
  const defaultProps = {
    url: '',
    isPending: false,
    isFailure: false,
    isSuccess: false,
    error: '',
  };
  const props = { ...defaultProps, ...setupProps };

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const wrapper = enzyme.shallow(<SiteStatus
    url={props.url}
    isPending={props.isPending}
    isSuccess={props.isSuccess}
    isFailure={props.isFailure}
    error={props.error}
  />);

  return {
    props,
    wrapper,
  };
};

test('renders without crashing', () => {
  const { wrapper } = setup();
  expect(wrapper).toMatchSnapshot();
});
