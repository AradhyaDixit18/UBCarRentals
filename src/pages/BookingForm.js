import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './BookingForm.css'; // Importing CSS for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    pickupDate: '',
    dropoffDate: '',
    vehicleType: '', // Added vehicleType to state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_orctrbo', 'template_6crh0vo', e.target, 'ipNx2VtW0zDq_H4Jc')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Optionally, reset form or show a success message
        setFormData({
          name: '',
          contactNumber: '',
          pickupDate: '',
          dropoffDate: '',
          vehicleType: '', // Reset vehicleType on submit
        });
        alert('Your booking has been submitted successfully!');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('An error occurred while sending your booking. Please try again.');
      });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="vehicleType">Vehicle Type</label>
        <select
          id="vehicleType"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          required
        >
          <option value="">Select a vehicle type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Scooty">Scooty</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="pickupDate">Pickup Date</label>
        <input
          type="date"
          id="pickupDate"
          name="pickupDate"
          value={formData.pickupDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="dropoffDate">Drop-off Date</label>
        <input
          type="date"
          id="dropoffDate"
          name="dropoffDate"
          value={formData.dropoffDate}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
