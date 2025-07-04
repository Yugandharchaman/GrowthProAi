import React, { useState } from 'react';

const BusinessForm = ({ setBusinessData, setLoading }) => {
  const [form, setForm] = useState({ name: '', location: '' });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!form.name.trim() || !form.location.trim()) {
      setError('Please fill in both fields.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setBusinessData({ ...form, ...data });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-[90%] sm:w-[316px] h-auto sm:h-[500px] p-[1px] rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 group transition-transform hover:scale-[1.02] mt-8"
    >
      <div className="absolute top-5 left-0 w-full h-full scale-[0.8] blur-[40px] bg-gradient-to-r from-green-500 to-cyan-500 z-0 rounded-xl opacity-30 transition-opacity group-hover:opacity-60 pointer-events-none"></div>

      <div className="relative z-10 bg-[#1f1a1d] text-white w-full h-full rounded-xl flex flex-col justify-center items-start px-6 py-6 space-y-4">
        <h2 className="text-lg font-bold w-full text-center tracking-wider">📋 Business Info</h2>

        <label className="text-sm tracking-wide">Business Name</label>
        <input
          type="text"
          placeholder="e.g. Cake & Co"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 rounded-md bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
        />

        <label className="text-sm tracking-wide">Location</label>
        <input
          type="text"
          placeholder="e.g. Mumbai"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full p-2 rounded-md bg-zinc-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full mt-2 py-2 text-white rounded-md font-medium shadow-lg transition ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </div>
          ) : (
            '🚀 Submit'
          )}
        </button>
      </div>
    </form>
  );
};

export default BusinessForm;
