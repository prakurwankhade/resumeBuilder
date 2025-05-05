import React, { useState, useEffect } from 'react';

const StepContact = ({ formData, setFormData }) => {
  const [email, setEmail] = useState(formData.email || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [address, setAddress] = useState(formData.address || '');

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      email,
      phone,
      address
    }));
  }, [email, phone, address, setFormData]);

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Contact Information</h2>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Enter your address"
        />
      </div>
    </div>
  );
};

export default StepContact;
