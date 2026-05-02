import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const currencies = [
  { code: 'THB', symbol: '฿', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.028 }, // 1 THB = 0.028 USD (approx 35 THB/USD)
  { code: 'EUR', symbol: '€', rate: 0.026 },
  { code: 'GBP', symbol: '£', rate: 0.022 },
  { code: 'AUD', symbol: 'A$', rate: 0.043 },
];

const tiers = {
  hotel: [
    { label: 'Backpacker', description: 'Hostels & Guesthouses', cost: 600 },
    { label: 'Comfort', description: '3-4 Star Hotels', cost: 3500 },
    { label: 'Luxury', description: '5-Star Beach Resorts', cost: 12000 },
  ],
  dining: [
    { label: 'Local', description: 'Street Food & Markets', cost: 400 },
    { label: 'Mixed', description: 'Cafes & Local Restos', cost: 1200 },
    { label: 'Fine', description: 'Beach Clubs & Upscale', cost: 4000 },
  ],
  activities: [
    { label: 'Chill', description: 'Beaches & Free Sights', cost: 200 },
    { label: 'Explorer', description: 'Group Tours & Massage', cost: 1800 },
    { label: 'VIP', description: 'Private Boats & Spas', cost: 6000 },
  ],
};

const BudgetCalculator: React.FC = () => {
  const [hotelTier, setHotelTier] = useState(1);
  const [diningTier, setDiningTier] = useState(1);
  const [activityTier, setActivityTier] = useState(1);
  const [currencyIndex, setCurrencyIndex] = useState(0);

  const dailyTotal = useMemo(() => {
    return tiers.hotel[hotelTier].cost + tiers.dining[diningTier].cost + tiers.activities[activityTier].cost;
  }, [hotelTier, diningTier, activityTier]);

  const currency = currencies[currencyIndex];
  const convertedTotal = (dailyTotal * currency.rate).toLocaleString(undefined, {
    minimumFractionDigits: currency.code === 'THB' ? 0 : 2,
    maximumFractionDigits: currency.code === 'THB' ? 0 : 2,
  });

  return (
    <div className="my-12 p-8 bg-gray-900 text-white rounded-3xl shadow-2xl not-prose">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Controls */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🏨</span> Hotel Vibe
            </h3>
            <input 
              type="range" min="0" max="2" step="1" 
              value={hotelTier} 
              onChange={(e) => setHotelTier(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between mt-2 text-sm font-medium">
              {tiers.hotel.map((t, i) => (
                <span key={t.label} className={hotelTier === i ? 'text-blue-400' : 'text-gray-500'}>{t.label}</span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">{tiers.hotel[hotelTier].description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🍜</span> Dining Style
            </h3>
            <input 
              type="range" min="0" max="2" step="1" 
              value={diningTier} 
              onChange={(e) => setDiningTier(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between mt-2 text-sm font-medium">
              {tiers.dining.map((t, i) => (
                <span key={t.label} className={diningTier === i ? 'text-green-400' : 'text-gray-500'}>{t.label}</span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">{tiers.dining[diningTier].description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🚤</span> Activities
            </h3>
            <input 
              type="range" min="0" max="2" step="1" 
              value={activityTier} 
              onChange={(e) => setActivityTier(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="flex justify-between mt-2 text-sm font-medium">
              {tiers.activities.map((t, i) => (
                <span key={t.label} className={activityTier === i ? 'text-purple-400' : 'text-gray-500'}>{t.label}</span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">{tiers.activities[activityTier].description}</p>
          </div>
        </div>

        {/* Results Card */}
        <div className="w-full md:w-72 bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-700">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Estimated Daily Cost</span>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-2xl font-bold text-gray-400">{currency.symbol}</span>
            <motion.span 
              key={convertedTotal}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-black tabular-nums"
            >
              {convertedTotal}
            </motion.span>
          </div>

          <div className="w-full space-y-3">
            <select 
              value={currencyIndex} 
              onChange={(e) => setCurrencyIndex(parseInt(e.target.value))}
              className="w-full bg-gray-700 border-none rounded-xl p-3 text-sm font-bold focus:ring-2 focus:ring-blue-500"
            >
              {currencies.map((c, i) => (
                <option key={c.code} value={i}>{c.code} ({c.symbol})</option>
              ))}
            </select>
            <p className="text-[10px] text-gray-500 text-center leading-relaxed italic">
              *Estimate includes accommodation per person (based on double occupancy), 3 meals, and daily activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
