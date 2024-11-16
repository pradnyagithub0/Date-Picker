'use client';

import { useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../../redux/recurrenceSlice';

export default function Calendar() {
  const dispatch = useDispatch();

  const handleStartDateChange = (event) => {
    dispatch(setStartDate(event.target.value));
  };

  const handleEndDateChange = (event) => {
    dispatch(setEndDate(event.target.value));
  };

  return (
    <div className="mb-3">
      <label className="form-label">Start Date:</label>
      <input
        type="date"
        className="form-control"
        onChange={handleStartDateChange}
      />
      <label className="form-label mt-3">End Date:</label>
      <input
        type="date"
        className="form-control"
        onChange={handleEndDateChange}
      />
    </div>
  );
}
