export default function EmptyState({ title='No results', subtitle='Try adjusting your filters or search.' }) {
  return (
    <div className="card p-10 text-center">
      <div className="text-4xl">🔍</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  )
}
