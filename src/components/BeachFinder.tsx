import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { beachesData } from '../data/beaches';

const BeachFinder: React.FC = () => {
  const vibes = ['Party', 'Family', 'Quiet', 'Luxury', 'Surfing', 'Nature'];
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const [showOnlySnorkeling, setShowOnlySnorkeling] = useState(false);

  const toggleVibe = (vibe: string) => {
    setSelectedVibes(prev => 
      prev.includes(vibe) ? prev.filter(v => v !== vibe) : [...prev, vibe]
    );
  };

  const filteredBeaches = useMemo(() => {
    return beachesData.filter(beach => {
      const matchesVibe = selectedVibes.length === 0 || beach.vibe.some(v => selectedVibes.includes(v));
      const matchesSnorkeling = !showOnlySnorkeling || beach.hasSnorkeling;
      return matchesVibe && matchesSnorkeling;
    });
  }, [selectedVibes, showOnlySnorkeling]);

  return (
    <div className="py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar - Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-24 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Filter by Vibe</h3>
                {selectedVibes.length > 0 && (
                  <button 
                    onClick={() => setSelectedVibes([])}
                    className="text-[10px] font-bold text-gray-400 hover:text-black uppercase tracking-tighter transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="flex flex-wrap lg:flex-col gap-3">
                {vibes.map((vibe) => {
                  const isActive = selectedVibes.includes(vibe);
                  return (
                    <button
                      key={vibe}
                      onClick={() => toggleVibe(vibe)}
                      className={`px-4 py-2 text-sm font-medium border rounded-full transition-all text-left ${
                        isActive 
                        ? 'border-black bg-black text-white shadow-lg shadow-black/10' 
                        : 'border-gray-200 text-gray-600 hover:border-black hover:text-black'
                      }`}
                    >
                      {vibe}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Activities</h3>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="hidden" 
                  checked={showOnlySnorkeling}
                  onChange={(e) => setShowOnlySnorkeling(e.target.checked)}
                />
                <div className={`w-6 h-6 border-2 rounded-md transition-all flex items-center justify-center ${
                  showOnlySnorkeling ? 'border-black bg-black' : 'border-gray-200 group-hover:border-black'
                }`}>
                  {showOnlySnorkeling && (
                    <motion.svg 
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </div>
                <span className={`text-sm font-medium transition-colors ${
                  showOnlySnorkeling ? 'text-black' : 'text-gray-700 group-hover:text-black'
                }`}>
                  Snorkeling available
                </span>
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content - Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Showing <span className="text-gray-400 font-medium">{filteredBeaches.length}</span> results
            </h2>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredBeaches.map((beach) => (
                <motion.article
                  key={beach.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="group cursor-pointer"
                >
                  <a href={beach.slug ? `/blog/${beach.slug}` : undefined} className={beach.slug ? 'block' : 'cursor-default'}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl group-hover:shadow-black/5 transition-shadow duration-500">
                      <img 
                        src={beach.imageUrl} 
                        alt={beach.name}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        {beach.vibe.slice(0, 2).map(v => (
                          <span key={v} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold group-hover:text-gray-600 transition-colors">{beach.name}</h3>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold">{beach.sandQuality}.0</span>
                          <span className="text-yellow-400 text-xs">★</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                        {beach.description}
                      </p>
                      {beach.slug && (
                        <div className="pt-2 text-xs font-bold uppercase tracking-widest text-black underline underline-offset-4">
                          Read Full Guide &rarr;
                        </div>
                      )}
                    </div>
                  </a>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {filteredBeaches.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200"
              >
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="text-xl font-bold">No beaches found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters to find your perfect spot.</p>
                <button 
                  onClick={() => { setSelectedVibes([]); setShowOnlySnorkeling(false); }}
                  className="mt-6 px-6 py-2 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

      </div>
    </div>
  );
};

export default BeachFinder;
