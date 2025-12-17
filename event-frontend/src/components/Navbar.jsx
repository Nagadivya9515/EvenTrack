import { Link } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/packages">Packages</Link>

      {!user && <Link to="/login">Login</Link>}

      {user?.role === 'admin' && (
        <Link to="/admin">Admin</Link>
      )}

      {user && <button onClick={logout}>Logout</button>}
    </nav>
  )
}
