import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
// import { fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/configure-store';

import MissionsPage from './pages/MissionsPage';
import RocketsPage from './pages/RocketsPage';
import ProfilePage from './pages/ProfilePage';

describe('Pages renders correctly', () => {
  it('Missions page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionsPage />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    const element = document.querySelector('.missions-list');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
  it('Rockets page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <RocketsPage />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>,
    );
    const element = document.querySelector('.rockets-list');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
  it('Profile page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProfilePage />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>,
    );
    const element = document.querySelector('.profile');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
