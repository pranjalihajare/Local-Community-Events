import { Link } from 'react-router-dom'
import { formatDate } from '../utils/date'

export default function EventCard({ e }) {
  return (
    <article className="card px-5 overflow-hidden transition hover:shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between px-5">
          <span className="badge">{e.type}</span>
          <span className="text-sm text-gray-600">{formatDate(e.date)}</span>
        </div>
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold">{e.title}</h3>
        <p className="mt-1 text-sm text-gray-700 line-clamp-2">{e.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <span>📍 {e.location}</span>
          <span>👤 {e.host}</span>
        </div>
      </div>
      <div className="border-t border-gray-200 p-3">
        <Link className="btn btn-outline w-full" to={`/events/${e.id}`}>View Details</Link>
      </div>
    </article>
  )
}
