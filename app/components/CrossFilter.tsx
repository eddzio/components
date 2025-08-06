import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function CrossFilter() {
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [selectedFirst, setSelectedFirst] = useState(options[0].value);
  const [selectedSecond, setSelectedSecond] = useState(options[0].value);

  return (
    <div className="flex items-start gap-4 w-[320px]">
      {/* first filter pinned left */}
      <div className="relative">
        <select
          value={selectedFirst}
          onChange={e => setSelectedFirst(e.target.value)}
          className='appearance-none rounded-lg shadow-sm bg-stone-50 border border-stone-200 text-stone-800 font-mono tracking-tighter pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2 cursor-pointer'
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8L10 12L14 8" stroke="#44403B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <AnimatePresence mode="wait">
        {showSecondDropdown ? (
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            key="second-dropdown"
            layout
          >
            <span className="text-stone-500 text-sm font-mono">and</span>
            <div className="relative">
              <select
                value={selectedSecond}
                onChange={e => setSelectedSecond(e.target.value)}
                className='appearance-none rounded-lg shadow-sm bg-stone-50 border border-stone-200 text-stone-800 font-mono tracking-tighter pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2 cursor-pointer'
              >
                {options.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 8L10 12L14 8" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            {/* close button */}
            <motion.button
              type="button"
              aria-label="Remove filter"
              onClick={() => setShowSecondDropdown(false)}
              className="rounded-full p-2 bg-stone-200 hover:bg-stone-300 transition-colors flex items-center justify-center w-8 h-8 focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              key="close-btn"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4L12 12M12 4L4 12" stroke="#44403B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            type="button"
            onClick={() => setShowSecondDropdown(true)}
            className='rounded-lg shadow-sm bg-orange-600 text-white font-mono tracking-tighter px-4 py-2 hover:bg-orange-500 hover:shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2  cursor-pointer'
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            key="add-filter-btn"
          >
            Add filter
          </motion.button>
        )}
      </AnimatePresence>
    </div>
    
  );
}
