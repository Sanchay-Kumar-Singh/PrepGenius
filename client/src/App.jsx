import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlacementRound from './components/PlacementRound';
import Programming from './components/Programming';
import AiServices from './components/AiServices';
const App = () => {
  return (
    <div>
       <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='placement-round' element={<PlacementRound/>} />
          <Route path='programming' element={<Programming/>}/>
          <Route path='ai-services' element={<AiServices/>}>
            <Route path='roadmap' />
            <Route path='quiz' />
            <Route path='mock-interview' />
            <Route path='review-resume' />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
    </div>
  )
}

export default App
