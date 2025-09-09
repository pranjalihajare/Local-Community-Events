export function formatDate(iso) {
  try {
    const d = new Date(iso + 'T00:00:00')
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}
