import React, { useState } from 'react';
import type { Appointment } from '../data';
import { mockAppointments } from '../data';
import { Star } from 'lucide-react';
import './Appointments.css';


const Appointments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedCounselor, setSelectedCounselor] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<'individual' | 'group'>('individual');
  const [showBooking, setShowBooking] = useState(false);

  const counselors = [
    { id: 'c1', name: 'Dr. Sarah Johnson', specialization: 'Anxiety & Depression', rating: 4.9 },
    { id: 'c2', name: 'Dr. Raj Patel', specialization: 'Academic Stress', rating: 4.8 },
    { id: 'c3', name: 'Dr. Priya Sharma', specialization: 'Relationship Issues', rating: 4.9 },
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime && selectedCounselor) {
      alert('Appointment booked successfully! You will receive an anonymous confirmation.');
      setShowBooking(false);
      setSelectedDate('');
      setSelectedTime('');
      setSelectedCounselor('');
    }
  };

  return (
    <div className="appointments-container">
      <h2>Book a Counseling Session</h2>

      {/* Counselors */}
      <div className="counselors-list">
        {counselors.map((c) => (
          <div
            key={c.id}
            onClick={() => {
              setSelectedCounselor(c.id);
              setShowBooking(true);
            }}
            className={`counselor-card ${selectedCounselor === c.id ? 'selected' : ''}`}
          >
            <h4>{c.name}</h4>
            <p>{c.specialization}</p>
            <div className="rating">
              <Star /> {c.rating}
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      {showBooking && (
        <div className="booking-form">
          <label>Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

          <label>Time:</label>
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
            <option value="">Select</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          <label>Session Type:</label>
          <select
            value={appointmentType}
            onChange={(e) => setAppointmentType(e.target.value as 'individual' | 'group')}
          >
            <option value="individual">Individual</option>
            <option value="group">Group</option>
          </select>

          <button onClick={handleBookAppointment}>Book Appointment</button>
        </div>
      )}

      {/* Upcoming Appointments */}
      <h3>Upcoming Sessions</h3>
      <div className="upcoming-appointments">
        {mockAppointments
          .filter((apt) => apt.status === 'scheduled')
          .map((apt: Appointment) => (
            <div key={apt.id} className="appointment-card">
              <h4>{apt.counselorName}</h4>
              <p>{apt.type} Session</p>
              <p>
                {apt.date} at {apt.time}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Appointments;
