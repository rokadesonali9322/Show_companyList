import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './compoents/page/Home'
import { Toaster } from 'react-hot-toast'
import AddCompany from './compoents/page/AddCompany'

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newcompanyname" element={<AddCompany />} />
        <Route
          path="*"
          element={<h1 className="NotfoundAddress">Address Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
