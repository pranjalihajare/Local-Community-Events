import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as api from '../utils/api'

const EventsCtx = createContext(null)

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    async function load() {
      setLoading(true)
      try {
        const data = await api.getEvents()
        if (!ignore) setEvents(data)
      } catch (e) {
        if (!ignore) setError(e?.message || 'Failed to load events')
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    load()
    return () => { ignore = true }
  }, [])

  const value = useMemo(() => ({
    events,
    setEvents,
    loading,
    error,
    async rsvp(eventId) {
      return api.rsvpEvent(eventId)
    },
    async createEvent(payload) {
      const created = await api.createEvent(payload)
      setEvents(await api.getEvents())
      return created
    }
  }), [events, loading, error])

  return <EventsCtx.Provider value={value}>{children}</EventsCtx.Provider>
}

export function useEvents() {
  const ctx = useContext(EventsCtx)
  if (!ctx) throw new Error('useEvents must be used within EventsProvider')
  return ctx
}
