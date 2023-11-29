'use client'
import Image from 'next/image'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'></Route>
        <Route path='/techart'></Route>
        <Route path='/code'></Route>
        <Route path='/illust'></Route>
      </Routes>
    </Router>
  )
}
