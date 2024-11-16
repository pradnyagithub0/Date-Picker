'use client';

import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

export default function DatePreview() {
  const { startDate, endDate, recurrenceType } = useSelector(
    (state) => state.recurrence
  );

  return (
    <div className="p-3 border rounded bg-light">
      <h3 className="mb-3">Date Preview:</h3>
      <p>
        <strong>Start Date:</strong>{' '}
        {startDate ? dayjs(startDate).format('YYYY-MM-DD') : 'Not Selected'}
      </p>
      <p>
        <strong>End Date:</strong>{' '}
        {endDate ? dayjs(endDate).format('YYYY-MM-DD') : 'Not Selected'}
      </p>
      <p>
        <strong>Recurrence Type:</strong> {recurrenceType}
      </p>
    </div>
  );
}
