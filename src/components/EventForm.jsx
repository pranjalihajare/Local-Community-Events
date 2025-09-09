import { useState } from 'react'

const TYPES = ['Workshop', 'Music', 'Sports', 'Meetup', 'Fitness', 'Social', 'Entertainment']

export default function EventForm({ onSubmit, submitting=false }) {
  const [form, setForm] = useState({
    title: '', description: '', date: '', location: '', type: TYPES[0], host: ''
  })
  const [errors, setErrors] = useState({})

  function update(k, v) { setForm(prev => ({ ...prev, [k]: v })) }

  function validate() {
    const e = {}
    if (!form.title.trim()) e.title = 'Title is required'
    if (!form.description.trim()) e.description = 'Description is required'
    if (!form.date) e.date = 'Select a date'
    if (!form.location.trim()) e.location = 'Location is required'
    if (!form.host.trim()) e.host = 'Host is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function submit(ev) {
    ev.preventDefault()
    if (!validate()) return
    onSubmit(form)
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input className="input mt-1" value={form.title} onChange={e=>update('title', e.target.value)} />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea rows={4} className="input mt-1" value={form.description} onChange={e=>update('description', e.target.value)} />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1">
          <label className="block text-sm font-medium">Date</label>
          <input type="date" className="input mt-1" value={form.date} onChange={e=>update('date', e.target.value)} />
          {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm font-medium">Location</label>
          <input className="input mt-1" value={form.location} onChange={e=>update('location', e.target.value)} />
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm font-medium">Type</label>
          <select className="select mt-1" value={form.type} onChange={e=>update('type', e.target.value)}>
            {TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Host</label>
        <input className="input mt-1" value={form.host} onChange={e=>update('host', e.target.value)} />
        {errors.host && <p className="mt-1 text-sm text-red-600">{errors.host}</p>}
      </div>
      <div className="flex justify-end gap-2 pt-2">
        <button type="reset" className="btn btn-outline" onClick={()=>setForm({ title:'', description:'', date:'', location:'', type:TYPES[0], host:'' })}>Reset</button>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Creating…' : 'Create Event'}
        </button>
      </div>
    </form>
  )
}
