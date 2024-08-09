"use client"
import { useState } from 'react';

const HotelBooking = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const roomImages: { [key: string]: string } = {
    Single: '/single-room.jpg',
    Double: '/double-room.jpg',
    Suite: '/suite-room.jpg',
    Deluxe: '/deluxe-room.jpg',
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <div className="relative w-full bg-white bg-opacity-80 p-6 rounded shadow-md">
        
        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 animate-pulse rounded"
          style={{ backgroundImage: 'url(/hotel-background.jpg)' }}>
        </div>

      
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Book Your Hotel</h1>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 mb-2">Location</label>
            <select
              id="location"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select a location</option>
              <option value="New York">New York</option>
              <option value="Paris">Paris</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Sydney">Sydney</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="roomType" className="block text-gray-700 mb-2">Room Type</label>
            <select
              id="roomType"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={selectedRoomType}
              onChange={(e) => setSelectedRoomType(e.target.value)}
            >
              <option value="">Select a room type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Suite">Suite</option>
              <option value="Deluxe">Deluxe</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="checkInDate" className="block text-gray-700 mb-2">Check-In Date</label>
            <input
              type="date"
              id="checkInDate"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="checkOutDate" className="block text-gray-700 mb-2">Check-Out Date</label>
            <input
              type="date"
              id="checkOutDate"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Room Images */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedRoomType ? (
          <div className="relative">
            <img
              src={roomImages[selectedRoomType]}
              alt={selectedRoomType}
              className="w-full h-64 object-cover rounded"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
              {selectedRoomType} Room
            </div>
          </div>
        ) : (
          Object.keys(roomImages).map((roomType) => (
            <div key={roomType} className="relative">
              <img
                src={roomImages[roomType]}
                alt={roomType}
                className="w-full h-64 object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                {roomType} Room
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HotelBooking;
