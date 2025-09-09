import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import EventDetail from './pages/EventDetail.jsx'
import Confirm from './pages/Confirm.jsx'
import CreateEvent from './pages/CreateEvent.jsx'
import { EventsProvider } from './context/EventsContext.jsx'

export default function App() {
  return (
    <EventsProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="container mt-6 mb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/confirm/:id" element={<Confirm />} />
            <Route path="/create" element={<CreateEvent />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </EventsProvider>
  )
}
