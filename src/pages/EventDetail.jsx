import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as api from '../utils/api'
import { formatDate } from '../utils/date'
import RSVPModal from '../components/RSVPModal'

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [open, setOpen] = useState(false)
  const [isRSVP, setIsRSVP] = useState(false)

  useEffect(() => {
    async function run() {
      const e = await api.getEventById(id)
      setEvent(e)
      setIsRSVP(api.hasRSVP(id))
    }
    run()
  }, [id])

  if (!event) return <div className="mt-6">Loading…</div>

  return (
    <section className="mx-auto max-w-3xl" >
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <span className="badge">{event.type}</span>
          <span className="text-sm text-gray-600">{formatDate(event.date)}</span>
        </div>
        <h1 className="mt-2 text-2xl font-semibold">{event.title}</h1>
        <p className="mt-2 text-gray-700">{event.description}</p>

        <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-3">
            <dt className="text-sm text-gray-500">Location</dt>
            <dd className="text-gray-800">📍 {event.location}</dd>
          </div>
          <div className="rounded-xl border border-gray-200 p-3">
            <dt className="text-sm text-gray-500">Host</dt>
            <dd className="text-gray-800">👤 {event.host}</dd>
          </div>
        </dl>

        <div className="mt-6 flex gap-2">
          <button className="btn btn-outline" onClick={() => navigate(-1)}>Back</button>
          {!isRSVP ? (
            <button className="btn btn-primary" onClick={() => setOpen(true)}>RSVP / Join</button>
          ) : (
            <span className="badge">You have RSVPed ✔</span>
          )}
        </div>
      </div>

      <RSVPModal
        open={open}
        title={event.title}
        onClose={() => setOpen(false)}
        onConfirm={async () => {
          await api.rsvpEvent(event.id)
          setOpen(false)
          navigate(`/confirm/${event.id}`)
        }}
      />
    </section>
  )
}
