import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/home'
import Packages from '../pages/packages'
import Login from '../pages/login'
import Register from '../pages/register'
import AdminDashboard from '../pages/AdminDashboard'
import AddPackage from '../pages/AddPackage'
import ProtectedRoute from '../components/ProtectedRoute'
import AdminRoute from '../components/AdminRoute'

export default function AppRouter() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User */}
        <Route element={<ProtectedRoute />}>
          {/* user-only pages later */}
        </Route>

        {/* Admin */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-package" element={<AddPackage />} />
        </Route>
      </Routes>
    </>
  )
}
