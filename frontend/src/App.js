import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import Card from './components/CardBusiness';

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black px-4 py-10 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        🚀 GrowthProAI – Business Dashboard
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        <BusinessForm setBusinessData={setBusinessData} setLoading={setLoading} />

        {loading ? (
          <div className="text-center animate-pulse text-lg">⏳ Loading data...</div>
        ) : (
          businessData && <Card data={businessData} setBusinessData={setBusinessData} />
        )}
      </div>
    </div>
  );
}

export default App;
