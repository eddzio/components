"use client"

import { useState, useMemo } from 'react'

const INITIAL_DATA = [
  {
    id: 'austria',
    label: 'Austria',
    locations: [
      { id: 'landstrasser', label: 'Landstraßer Hauptstraße', selected: true },
      { id: 'mariahilfer', label: 'Mariahilfer Straße', selected: false },
      { id: 'graben', label: 'Graben', selected: true },
      { id: 'karntner', label: 'Kärntner Straße', selected: false },
    ],
  },
  {
    id: 'denmark',
    label: 'Denmark',
    locations: [
      { id: 'stroget', label: 'Strøget', selected: false },
      { id: 'norrebro', label: 'Nørrebrogade', selected: false },
      { id: 'vesterbro', label: 'Vesterbrogade', selected: false },
    ],
  },
  {
    id: 'uk',
    label: 'United Kingdom',
    locations: Array.from({ length: 100 }, (_, i) => ({
      id: `uk-loc-${i}`,
      label: `Location ${i + 1}`,
      selected: true,
    })),
  },
]

function getCheckState(selected, total) {
  if (selected === 0) return 'none'
  if (selected === total) return 'all'
  return 'partial'
}

function Checkbox({ state, onChange, size = 'md' }) {
  const dim = size === 'sm' ? 18 : 22
  const isChecked = state === 'all'
  const isPartial = state === 'partial'
  const isActive = isChecked || isPartial

  return (
    <button
      type="button"
      onClick={onChange}
      style={{
        width: dim,
        height: dim,
        minWidth: dim,
        borderRadius: 5,
        border: isActive ? 'none' : '1.5px solid #ccc',
        background: isActive ? '#1a1a1a' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
      aria-checked={isChecked ? 'true' : isPartial ? 'mixed' : 'false'}
      role="checkbox"
    >
      {isChecked && (
        <svg width={dim - 6} height={dim - 6} viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {isPartial && (
        <svg width={dim - 8} height={dim - 8} viewBox="0 0 10 10" fill="none">
          <path d="M2 5h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}

function Badge({ count, active }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: count >= 100 ? 44 : 28,
        height: 28,
        padding: '0 8px',
        borderRadius: 14,
        background: 'rgba(0, 0, 0, 0.1)',
        color: '#666',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: 0,
      }}
    >
      {count}
    </span>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="5.5" stroke="#999" strokeWidth="1.5" />
      <path d="M12.5 12.5L16 16" stroke="#999" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M6 4l4 4-4 4" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function NestedSelect() {
  const [countries, setCountries] = useState(INITIAL_DATA)
  const [activeCountry, setActiveCountry] = useState('austria')
  const [search, setSearch] = useState('')

  const stats = useMemo(() => {
    return countries.map((c) => {
      const selected = c.locations.filter((l) => l.selected).length
      return { id: c.id, selected, total: c.locations.length }
    })
  }, [countries])

  const totalSelected = stats.reduce((s, c) => s + c.selected, 0)
  const totalAll = stats.reduce((s, c) => s + c.total, 0)
  const globalState = getCheckState(totalSelected, totalAll)

  function toggleAll() {
    const nextVal = globalState !== 'all'
    setCountries((prev) =>
      prev.map((c) => ({
        ...c,
        locations: c.locations.map((l) => ({ ...l, selected: nextVal })),
      }))
    )
  }

  function toggleCountry(countryId) {
    const stat = stats.find((s) => s.id === countryId)
    const nextVal = stat.selected !== stat.total
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? { ...c, locations: c.locations.map((l) => ({ ...l, selected: nextVal })) }
          : c
      )
    )
  }

  function toggleCountryAll() {
    const country = countries.find((c) => c.id === activeCountry)
    if (!country) return
    const sel = country.locations.filter((l) => l.selected).length
    const nextVal = sel !== country.locations.length
    setCountries((prev) =>
      prev.map((c) =>
        c.id === activeCountry
          ? { ...c, locations: c.locations.map((l) => ({ ...l, selected: nextVal })) }
          : c
      )
    )
  }

  function toggleLocation(countryId, locationId) {
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              locations: c.locations.map((l) =>
                l.id === locationId ? { ...l, selected: !l.selected } : l
              ),
            }
          : c
      )
    )
  }

  const activeCountryData = countries.find((c) => c.id === activeCountry)
  const activeStat = stats.find((s) => s.id === activeCountry)
  const activeCountryState = activeStat
    ? getCheckState(activeStat.selected, activeStat.total)
    : 'none'

  const filteredLocations = activeCountryData
    ? activeCountryData.locations.filter((l) =>
        l.label.toLowerCase().includes(search.toLowerCase())
      )
    : []

  return (
    <div
      style={{
        display: 'flex',
        background: '#f5f2ee',
        borderRadius: 16,
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Left panel */}
      <div
        style={{
          width: 280,
          minWidth: 280,
          padding: '24px 0',
          borderRight: '1px solid #e0dbd4',
        }}
      >
        <div style={{ padding: '0 20px 16px', fontSize: 14, fontWeight: 600, color: '#111' }}>
          Country
        </div>

        {/* Select all row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 20px',
            cursor: 'pointer',
          }}
          onClick={(e) => {
            if (e.target.closest('button')) return
            toggleAll()
          }}
        >
          <Checkbox state={globalState} onChange={toggleAll} />
          <span style={{ flex: 1, fontSize: 15, color: '#111' }}>Select all</span>
          <ChevronRight />
        </div>

        {/* Country rows */}
        {countries.map((country) => {
          const stat = stats.find((s) => s.id === country.id)
          const state = getCheckState(stat.selected, stat.total)
          const isActive = country.id === activeCountry
          const badgeActive = state === 'all' || (state === 'partial' && isActive)

          return (
            <div
              key={country.id}
              onClick={() => setActiveCountry(country.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 12px',
                margin: '2px 8px',
                borderRadius: 10,
                background: isActive ? '#ede9e3' : 'transparent',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <Checkbox
                state={state}
                onChange={(e) => {
                  e.stopPropagation()
                  toggleCountry(country.id)
                }}
              />
              <span style={{ flex: 1, fontSize: 15, color: '#111' }}>{country.label}</span>
              <Badge count={stat.selected} active={isActive && state !== 'none'} />
              <ChevronRight />
            </div>
          )
        })}
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: '#fff',
            border: '1.5px solid #ddd',
            borderRadius: 10,
            padding: '10px 14px',
            marginBottom: 12,
          }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search locations"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: 15,
              color: '#111',
              flex: 1,
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* All in [Country] */}
        {activeCountryData && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 4px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            onClick={(e) => {
              if (e.target.closest('button')) return
              toggleCountryAll()
            }}
          >
            <Checkbox state={activeCountryState} onChange={toggleCountryAll} />
            <span style={{ fontSize: 15, color: '#111' }}>
              All in {activeCountryData.label}
            </span>
          </div>
        )}

        {/* Location rows */}
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 4px',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              onClick={(e) => {
                if (e.target.closest('button')) return
                toggleLocation(activeCountry, loc.id)
              }}
            >
              <Checkbox
                state={loc.selected ? 'all' : 'none'}
                onChange={() => toggleLocation(activeCountry, loc.id)}
              />
              <span style={{ fontSize: 15, color: '#111' }}>{loc.label}</span>
            </div>
          ))}
          {filteredLocations.length === 0 && (
            <p style={{ color: '#999', fontSize: 14, padding: '8px 4px' }}>No locations found</p>
          )}
        </div>
      </div>
    </div>
  )
}
