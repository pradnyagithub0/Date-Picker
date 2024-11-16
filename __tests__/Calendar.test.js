import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Calendar from '../../components/DatePicker/Calendar';

test('renders calendar and updates state on date input', () => {
  render(
    <Provider store={store}>
      <Calendar />
    </Provider>
  );

  const startDateInput = screen.getByLabelText(/Start Date/i);
  const endDateInput = screen.getByLabelText(/End Date/i);

  // Check if inputs render
  expect(startDateInput).toBeInTheDocument();
  expect(endDateInput).toBeInTheDocument();

  // Simulate entering dates
  fireEvent.change(startDateInput, { target: { value: '2024-11-15' } });
  expect(startDateInput.value).toBe('2024-11-15');

  fireEvent.change(endDateInput, { target: { value: '2024-11-20' } });
  expect(endDateInput.value).toBe('2024-11-20');
});
