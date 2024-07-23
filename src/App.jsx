import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

function App() {
  const [sidebar,setSidebar] =useState(true)
  const location = useLocation();
  return (
    <>
     <Navbar  setSidebar={setSidebar} currentPath={location.pathname}/>
     <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>} />
     </Routes>
    </>
  )
}

export default App
