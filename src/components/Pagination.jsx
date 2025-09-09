export default function Pagination({ total, page, pageSize, onPageChange }) {
  const pages = Math.max(1, Math.ceil(total / pageSize))
  const canPrev = page > 1
  const canNext = page < pages
  if (pages <= 1) return null

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button className="btn btn-outline" disabled={!canPrev} onClick={() => canPrev && onPageChange(page - 1)}>
        Prev
      </button>
      <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm">
        Page {page} / {pages} — {total} results
      </div>
      <button className="btn btn-outline" disabled={!canNext} onClick={() => canNext && onPageChange(page + 1)}>
        Next
      </button>
    </div>
  )
}
