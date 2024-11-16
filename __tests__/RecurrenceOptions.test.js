import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import RecurrenceOptions from '../../components/DatePicker/RecurrenceOptions';

test('renders recurrence options and updates state on selection', () => {
  render(
    <Provider store={store}>
      <RecurrenceOptions />
    </Provider>
  );

  // Check if the dropdown renders correctly
  const selectElement = screen.getByRole('combobox');
  expect(selectElement).toBeInTheDocument();

  // Check default value
  expect(selectElement.value).toBe('Daily');

  // Simulate selecting "Weekly"
  fireEvent.change(selectElement, { target: { value: 'Weekly' } });
  expect(selectElement.value).toBe('Weekly');
});
