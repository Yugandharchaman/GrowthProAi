import React from 'react';

const Card = ({ data, setBusinessData }) => {
  const regenerate = async () => {
    const res = await fetch(
      `http://localhost:3001/regenerate-headline?name=${data.name}&location=${data.location}`
    );
    const { headline } = await res.json();
    setBusinessData({ ...data, headline });
  };

  return (
    <div className="relative w-[90%] sm:w-[350px] h-[350px] p-[8px] rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-900 shadow-xl mt-24">
      <div className="absolute top-8 left-0 w-full h-full scale-90 blur-2xl bg-gradient-to-r from-blue-400 to-indigo-900 z-0 rounded-2xl opacity-30 transition duration-500 pointer-events-none"></div>

      <div className="relative z-10 bg-[#181818] text-white w-full h-full rounded-xl flex flex-col justify-between px-6 py-6 shadow-inner">
        <div>
          <p className="text-sm text-pink-400 mb-2">
            📍 Location: <span className="font-medium text-white">{data.location}</span>
          </p>
          <p className="text-sm text-yellow-400 mb-1">
            ⭐ <span className="text-white font-semibold">{data.rating}</span> rating
          </p>
          <p className="text-sm text-purple-300">
            💬 <span className="text-white font-semibold">{data.reviews}</span> reviews
          </p>
        </div>

        <h2 className="text-lg bg-[#222] border border-white border-opacity-20 rounded p-4 font-semibold mt-4 leading-snug text-center text-white">
          "{data.headline}"
        </h2>

        <button
          onClick={regenerate}
          className="w-full mt-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-medium shadow-md border border-white border-opacity-20 hover:scale-105 transition"
        >
          🔁 Regenerate
        </button>
      </div>
    </div>
  );
};

export default Card;
