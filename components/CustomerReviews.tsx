"use client"
import { useState, useEffect } from 'react';

const reviews = [
  "The hotel was amazing! The staff was friendly and the rooms were clean and spacious.",
  "I had a great experience staying at this hotel. The location was perfect.",
  "The service was exceptional! Highly recommended for anyone visiting the city.",
  "Comfortable rooms and great amenities. Will definitely stay here again.",
];

const CustomerReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsDialogOpen(true);
    const timeout = setTimeout(() => setIsDialogOpen(false), 3500);

    return () => clearTimeout(timeout);
  }, [currentReviewIndex]);

  return (
    <div className="relative w-full max-w-md mx-auto mt-10">
      <div
        className={`${
          isDialogOpen ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500 ease-in-out bg-white p-4 shadow-lg rounded`}
      >
        <h2 className="text-xl font-bold mb-2">Customer Review</h2>
        <p className="text-gray-700">{reviews[currentReviewIndex]}</p>
      </div>
    </div>
  );
};

export default CustomerReviews;
