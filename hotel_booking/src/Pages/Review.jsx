import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/reviewSlice'; // Redux action for handling reviews

const Review = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (rating > 0) {
      dispatch(addReview({ rating, comment }));
      setSubmitted(true);
      setRating(0);
      setComment('');
    }
  };

  const handleRating = (value) => setRating(value);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leave a Review</h1>
      {submitted && <p className="text-green-500 mb-4">Thank you for your review!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold mb-2">Rating:</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => handleRating(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-bold mb-2">Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 w-full"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
