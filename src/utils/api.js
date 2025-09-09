import raw from '../data/events.json' assert { type: 'json' }

const STORAGE_EVENTS = 'cevents.events'
const STORAGE_RSVP = 'cevents.rsvps'

function getStoredEvents() {
  const s = localStorage.getItem(STORAGE_EVENTS)
  if (s) {
    try { return JSON.parse(s) } catch { /* ignore */ }
  }
  return raw.events
}

function setStoredEvents(events) {
  localStorage.setItem(STORAGE_EVENTS, JSON.stringify(events))
}

export async function getEvents({ type, date, location, q, page = 1, pageSize = 9 } = {}) {
  await delay(200) // simulate network
  let events = getStoredEvents()

  // Basic search/filter
  if (q) {
    const qc = q.trim().toLowerCase()
    events = events.filter(e =>
      e.title.toLowerCase().includes(qc) ||
      e.description.toLowerCase().includes(qc) ||
      e.host.toLowerCase().includes(qc)
    )
  }
  if (type && type !== 'All') events = events.filter(e => e.type === type)
  if (location && location !== 'All') events = events.filter(e => e.location === location)
  if (date) events = events.filter(e => e.date === date)

  // Sort by date asc
  events = events.sort((a, b) => a.date.localeCompare(b.date))

  // Pagination
  const total = events.length
  const start = (page - 1) * pageSize
  const end = start + pageSize
  const pageItems = events.slice(start, end)
  return Object.assign(pageItems, { total, page, pageSize })
}

export async function getEventById(id) {
  await delay(150)
  const events = getStoredEvents()
  return events.find(e => String(e.id) === String(id)) || null
}

export async function rsvpEvent(eventId) {
  await delay(100)
  const map = getRSVPMap()
  map[String(eventId)] = true
  localStorage.setItem(STORAGE_RSVP, JSON.stringify(map))
  return { ok: true }
}

export function hasRSVP(eventId) {
  const map = getRSVPMap()
  return Boolean(map[String(eventId)])
}

export async function createEvent(payload) {
  await delay(200)
  const events = getStoredEvents()
  const nextId = (events.reduce((m, e) => Math.max(m, e.id), 0) || 0) + 1
  const record = {
    id: nextId,
    title: payload.title.trim(),
    type: payload.type,
    date: payload.date,
    location: payload.location,
    host: payload.host.trim(),
    description: payload.description.trim()
  }
  events.push(record)
  setStoredEvents(events)
  return record
}

function getRSVPMap() {
  const s = localStorage.getItem(STORAGE_RSVP)
  if (!s) return {}
  try { return JSON.parse(s) } catch { return {} }
}

function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}
