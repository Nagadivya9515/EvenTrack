import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import App from './App'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
