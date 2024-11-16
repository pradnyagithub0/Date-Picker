import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import DatePreview from '../../components/DatePicker/DatePreview';

test('renders preview and displays state values', () => {
  render(
    <Provider store={store}>
      <DatePreview />
    </Provider>
  );

  // Check initial state
  expect(screen.getByText(/Start Date: Not Selected/i)).toBeInTheDocument();
  expect(screen.getByText(/End Date: Not Selected/i)).toBeInTheDocument();
  expect(screen.getByText(/Recurrence Type: Daily/i)).toBeInTheDocument();
});
