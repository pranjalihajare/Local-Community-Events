import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as api from '../utils/api'

export default function Confirm() {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    async function run() {
      const e = await api.getEventById(id)
      setEvent(e)
    }
    run()
  }, [id])

  if (!event) return <div className="mt-6">Loading…</div>

  return (
    <section className="mx-auto max-w-2xl">
      <div className="card p-10 text-center">
        <div className="text-5xl">🎉</div>
        <h1 className="mt-2 text-2xl font-semibold">You're in!</h1>
        <p className="mt-2 text-gray-700">
          Your RSVP for <span className="font-medium">“{event.title}”</span> is confirmed.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <Link className="btn btn-outline" to={`/events/${event.id}`}>View Event</Link>
          <Link className="btn btn-primary" to="/">Explore more</Link>
        </div>
      </div>
    </section>
  )
}
