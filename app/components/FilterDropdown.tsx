import React, { useState } from 'react';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function FilterDropdown() {
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [selectedFirst, setSelectedFirst] = useState(options[0].value);
  const [selectedSecond, setSelectedSecond] = useState(options[0].value);

  return (
    <div className="flex items-center gap-4">

      <div className="relative">
        <select
          value={selectedFirst}
          onChange={e => setSelectedFirst(e.target.value)}
          className='appearance-none rounded-lg shadow-sm bg-stone-50 border border-stone-200 text-stone-800 font-mono tracking-tighter pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2'
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
      
      

      {showSecondDropdown && (
        <div className="flex items-center gap-4">
            and
          <div className="relative">
            <select
              value={selectedSecond}
              onChange={e => setSelectedSecond(e.target.value)}
              className='appearance-none rounded-lg shadow-sm bg-stone-50 border border-stone-200 text-stone-800 font-mono tracking-tighter pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2'
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
          <button
            type="button"
            aria-label="Remove filter"
            onClick={() => setShowSecondDropdown(false)}
            className="rounded-full p-2 bg-stone-200 hover:bg-stone-300 transition-colors flex items-center justify-center w-8 h-8 focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L12 12M12 4L4 12" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}


{/* Add filter button */}
      {!showSecondDropdown && (
        <button
          type="button"
          onClick={() => setShowSecondDropdown(true)}
          className='rounded-lg shadow-sm bg-orange-600 text-white font-mono tracking-tighter px-4 py-2 hover:bg-orange-500 hover:shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-stone-800 ring-offset-2'
        >
          Add filter
        </button>
      )}
    </div>
  );
}
