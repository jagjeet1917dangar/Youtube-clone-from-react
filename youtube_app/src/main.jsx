import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mainmenu from './components/Mainmenu.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mainmenu/>
    <Navbar/>
    <Sidebar/>
  </StrictMode>,
)
