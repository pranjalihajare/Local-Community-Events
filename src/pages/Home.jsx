import { useEffect, useState } from 'react'
import { useEvents } from '../context/EventsContext'
import Filters from '../components/Filters'
import EventCard from '../components/EventCard'
import Pagination from '../components/Pagination'
import EmptyState from '../components/EmptyState'
import * as api from '../utils/api'

const PAGE_SIZE = 9

export default function Home() {
  const { events: all, loading, error } = useEvents()
  const [filters, setFilters] = useState({})
  const [page, setPage] = useState(1)
  const [data, setData] = useState(Object.assign([], { total: 0, page: 1, pageSize: PAGE_SIZE }))

  useEffect(() => {
    async function run() {
      const list = await api.getEvents({ ...filters, page, pageSize: PAGE_SIZE })
      setData(list)
    }
    run()
  }, [filters, page])

  useEffect(() => { setPage(1) }, [JSON.stringify(filters)])

  return (
    <section className='px-6 max-w-7xl mx-auto'>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mb-2  font-bold">Explore Events</h1>
      </div>

      <Filters events={all} onChange={setFilters} />

      {loading && <div className="mt-6">Loading events…</div>}
      {error && <div className="mt-6 text-red-600">{error}</div>}

      {!loading && data.length === 0 && <EmptyState />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(e => <EventCard key={e.id} e={e} />)}
      </div>

      <Pagination total={data.total || 0} page={data.page || 1} pageSize={data.pageSize || PAGE_SIZE} onPageChange={setPage} />
    </section>
  )
}
