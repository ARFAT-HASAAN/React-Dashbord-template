import Sidebar from './components/Sidebars'
import Topbar from './components/Topbar'
import Home from './pages/Home/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
