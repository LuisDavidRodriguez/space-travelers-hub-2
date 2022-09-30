import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/configStore';
import App from '../App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Missions/i);
  expect(linkElement).toBeInTheDocument();
});
