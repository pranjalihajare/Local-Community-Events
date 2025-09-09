import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3 ">
        <Link to="/" className="text-xl px-3 font-semibold tracking-tight">
          🌟 Community Events
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn btn-outline hidden sm:inline-flex ${isActive && pathname==='/' ? 'ring-2 ring-indigo-500' : ''}`
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `btn btn-primary ${isActive ? 'ring-2 ring-indigo-300' : ''}`
            }
          >
            Create Event
          </NavLink>
        </nav>
      </div>
    </header>
  )
} 