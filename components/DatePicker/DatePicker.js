'use client';

import RecurrenceOptions from './RecurrenceOptions';
import Calendar from './Calendar';
import DatePreview from './DatePreview';

export default function DatePicker() {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Date Picker</h1>
          <RecurrenceOptions />
          <Calendar />
          <DatePreview />
        </div>
      </div>
    </div>
  );
}
