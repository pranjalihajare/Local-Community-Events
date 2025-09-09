export default function RSVPModal({ open, onClose, onConfirm, title }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="card w-full max-w-md p-6">
        <h3 className="text-lg font-semibold">RSVP to “{title}”</h3>
        <p className="mt-2 text-sm text-gray-600">We'll mark your RSVP locally. You can revisit this event anytime.</p>
        <div className="mt-6 flex justify-end gap-2">
          <button className="btn btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={onConfirm}>Confirm RSVP</button>
        </div>
      </div>
    </div>
  )
}
