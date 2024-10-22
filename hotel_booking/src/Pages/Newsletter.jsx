import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { subscribeToNewsletter } from '../src/redux/newsletterSlice'; // Redux action to handle subscriptions

const Newsletter = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      dispatch(subscribeToNewsletter({ email, message }));
      setSubmitted(true);
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h1>
      {submitted && <p className="text-green-500 mb-4">Thank you for subscribing!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Message (optional):</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 w-full"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
