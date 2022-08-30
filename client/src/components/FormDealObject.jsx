import { useState, useEffect } from 'react';

export default function FormDealObject() {
  const [event, setEvent] = useState({
    id: 1,
    limit: 2000,
    price: 10,
    accessLvl: 0,
    details: 'Event that contains all the fields',
    duration: 24,
    eventType: 1,
    eventLocation: 'asdasd',
    creator: 1,
    startDate: '2020-06-01T12:00:00',
    title: 'Testing update',
    imageUrl: 'd0659c5e-7ca1-4b02-b148-6221d6e7d7a8',
  });

  useEffect(() => { console.log(123321321); }, []);

  const onTodoChange = (value, key) => {
    setEvent((ev) => ({
      ...ev,
      [key]: value,
    }));
  };

  return (

    <div>
      {JSON.stringify(event)}
      <input
        type="text"
        className="form-control"
        value={event.title}
        onChange={(e) => onTodoChange(e.target.value, 'title')}
        id="EventTitle"
      />

    </div>
  );
}
