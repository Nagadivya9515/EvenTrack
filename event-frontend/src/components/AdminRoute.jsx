import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function AdminRoute() {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" />
  if (user.role !== 'admin') return <Navigate to="/" />

  return <Outlet />
}
