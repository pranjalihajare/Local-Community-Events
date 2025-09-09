import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EventForm from '../components/EventForm'
import { useEvents } from '../context/EventsContext'

export default function CreateEvent() {
  const { createEvent } = useEvents()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(form) {
    try {
      setSubmitting(true)
      const rec = await createEvent(form)
      navigate(`/events/${rec.id}`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto max-w-3xl">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Create a New Event</h1>
        <p className="mt-1 text-gray-600">Fill the details below. All fields are required.</p>
        <div className="mt-6">
          <EventForm onSubmit={onSubmit} submitting={submitting} />
        </div>
      </div>
    </section>
  )
}
