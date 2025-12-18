import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import RegistrationForm from './pages/RegistrationForm'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookingForm from './components/BookingForm'
import AdminAddPackage from './components/AdminAddPackage'
import Packages from './pages/Packages'
import Products from './pages/Products'
import About from './pages/About'
import Login from './pages/Login'
import { Routes,Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'
import PackageDetails from './pages/packageDetails'

function App() {
  return (
// {/* <div>
//   {/* < RegistrationForm /> */}
//   <Home />
// </div> */}
<>
{/* <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <BookingForm />
    </div>
<div>
< AdminAddPackage />
</div> */}
< Navbar />
{/* <PackageDetails />
<AdminDashboard/> */}
<Routes>
  {/* <Route path ="/wedding" element ={<Wedding/>}/>
  <Route path ="/birthday" element ={<Birthday/>}/>
  <Route path ="/anniversary" element ={<Anniversary/>}/>
  <Route path ="/baby-shower" element ={<BabyShower/>}/>
  <Route path ="/naming-ceremony" element ={<NamingCeremony/>}/>
  <Route path ="/house-warming" element ={<HouseWarming/>}/> */}

  <Route path='/' element = {<Home/>}/>
  <Route path="/packages" element={<Packages />} />
  <Route path="/products" element={<Products />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<RegistrationForm />} />
  <Route path="/package/:wedding" element={<PackageDetails />} />

</Routes>
</>
  );
}

export default App
