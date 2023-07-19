import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import ProductDetail from './Pages/ProductDetail'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/product/:medicine_id' element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
