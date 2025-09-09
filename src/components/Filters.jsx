import { useEffect, useMemo, useState } from 'react'

export default function Filters({ events, onChange, initial = {} }) {
  const [q, setQ] = useState(initial.q || '')
  const [type, setType] = useState(initial.type || 'All')
  const [location, setLocation] = useState(initial.location || 'All')
  const [date, setDate] = useState(initial.date || '')

  const types = useMemo(() => ['All', ...Array.from(new Set(events.map(e => e.type)))], [events])
  const locations = useMemo(() => ['All', ...Array.from(new Set(events.map(e => e.location)))], [events])

  useEffect(() => {
    const id = setTimeout(() => onChange({ q, type, location, date }), 250)
    return () => clearTimeout(id)
  }, [q, type, location, date])

  return (
    <div className="card p-4 mb-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <input className="input" placeholder="Search title, host, description…" value={q} onChange={e => setQ(e.target.value)} />
        <select className="select" value={type} onChange={e => setType(e.target.value)}>
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <select className="select" value={location} onChange={e => setLocation(e.target.value)}>
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <input type="date" className="input" value={date} onChange={e => setDate(e.target.value)} />
      </div>
    </div>
  )
}
