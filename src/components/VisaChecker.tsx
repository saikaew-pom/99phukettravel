import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visaData = [
  { country: "United States", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "United Kingdom", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Australia", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Canada", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Germany", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "France", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "China", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "India", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Russia", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Singapore", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "South Korea", status: "Visa Exempt", duration: "90 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Brazil", status: "Visa Exempt", duration: "90 Days", forms: ["TDAC (Mandatory)"] },
  { country: "United Arab Emirates", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "South Africa", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Israel", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Mexico", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Taiwan", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
  { country: "Kazakhstan", status: "Visa Exempt", duration: "60 Days", forms: ["TDAC (Mandatory)"] },
];

const VisaChecker: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const result = visaData.find(d => d.country === selectedCountry);

  return (
    <div className="my-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm not-prose">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Do I need a Visa for Phuket?</h3>
        <p className="text-gray-500 mb-8 text-sm">Select your passport country to see 2026 entry requirements.</p>
        
        <div className="relative mb-8">
          <select 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full p-4 bg-white border border-gray-200 rounded-2xl appearance-none cursor-pointer focus:ring-2 focus:ring-black outline-none font-medium"
          >
            <option value="">— Select your Country —</option>
            {visaData.map(d => (
              <option key={d.country} value={d.country}>{d.country}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key={result.country}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white p-6 rounded-2xl border border-green-100 shadow-xl shadow-green-900/5 text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                  ✅
                </div>
                <div>
                  <h4 className="font-bold text-lg">{result.status}</h4>
                  <p className="text-sm text-green-600 font-medium">Up to {result.duration}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Required Forms</span>
                  <p className="font-bold text-sm">Thailand Digital Arrival Card (TDAC)</p>
                  <p className="text-xs text-gray-500 mt-1 italic">Must be submitted 72 hours before arrival.</p>
                </div>

                <a 
                  href="https://tdac.immigration.go.th" 
                  target="_blank"
                  className="block w-full py-3 bg-black text-white text-center rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors"
                >
                  Go to Official TDAC Portal
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  • Passport must be valid for at least 6 months.<br />
                  • Proof of onward travel (ticket out of Thailand) required.<br />
                  • Proof of funds (10,000 THB/person) may be requested.
                </p>
              </div>
            </motion.div>
          ) : (
            selectedCountry && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 italic text-sm"
              >
                If your country isn't listed, you likely need to apply for a Tourist Visa at a Thai Embassy.
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VisaChecker;
