import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../../../redux/configStore';
import MissionRow from '../MissionRow/MissionRow';

describe('Row mission component', () => {
  test('Renders Row Mission component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MissionRow />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
