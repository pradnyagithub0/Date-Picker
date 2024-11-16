'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setRecurrenceType } from '../../redux/recurrenceSlice';

export default function RecurrenceOptions() {
  const dispatch = useDispatch();
  const recurrenceType = useSelector((state) => state.recurrence.recurrenceType);

  const handleRecurrenceChange = (event) => {
    dispatch(setRecurrenceType(event.target.value));
  };

  return (
    <div className="mb-3">
      <label className="form-label">Recurrence Type:</label>
      <select
        className="form-select"
        value={recurrenceType}
        onChange={handleRecurrenceChange}
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    </div>
  );
}
