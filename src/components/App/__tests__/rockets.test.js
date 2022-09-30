import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from '../../Rockets/Rockets';
import store from '../../../redux/configStore';

describe('Rockets Component Rendering ', () => {
  it('Matches snapshot', () => {
    const Tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </MemoryRouter>,
    ).toJSON();
    expect(Tree).toMatchSnapshot();
  });
});
