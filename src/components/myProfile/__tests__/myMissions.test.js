import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/configStore';
import fetchMissions from '../../../redux/missions/missionsApi';
import { getActiveMissions } from '../__mocks__/getActiveMissionsMock';
import MyMissions from '../MyMissions/MyMissions';

describe('Testing missions', () => {
  it('Testing Against snapShot', async () => {
    const tree = render(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    );

    // taking the screen shot
    expect(tree).toMatchSnapshot();
  });

  it('Testing MyMissions container with 4 missions We shall have 2 elements filtered', async () => {
    const missions = await getActiveMissions();
    const action = { type: fetchMissions.fulfilled.toString(), payload: missions };
    store.dispatch(action);
    render(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    );
    // screen.debug();
    // we shall have 2 items renderered with the word Test and the number whatever
    expect(screen.getByText(/Test 1/)).toBeInTheDocument();
    expect(screen.getByText(/Test 2/)).toBeInTheDocument();
  });

  beforeEach(() => { // Runs before each test in the suite
  });
});
