import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlacementRound from './components/PlacementRound';
import Programming from './components/Programming';
import AiServices from './components/AiServices';
import C from './components/Programming/C';
import CPP from './components/Programming/CPP';
import Java from './components/Programming/Java';
import Python from './components/Programming/Python';
import Fullstack from './components/Programming/Fullstack';
import Roadmap from './components/AI-Services/Roadmap';
import Quiz from './components/AI-Services/Quiz';
import MockInterview from './components/AI-Services/MockInterview';
import ReviewResume from './components/AI-Services/ReviewResume';
import AptitudeRound from './components/Placement-Rounds/AptitudeRound';
import TechnicalRound from './components/Placement-Rounds/TechnicalRound';
import CodingRound from './components/Placement-Rounds/CodingRound';
import HRRound from './components/Placement-Rounds/HRRound';
const App = () => {
  return (
    <div>
       <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='placement-round' element={<PlacementRound/>}>
            <Route path='aptitude-round' element={<AptitudeRound/>} />
            <Route path='technical-round' element={<TechnicalRound/>} />
            <Route path='coding-round' element={<CodingRound/>} />
            <Route path='hr-round' element={<HRRound/>} />
          </Route>
          <Route path='programming' element={<Programming/>}>
            <Route path='c'  element={<C/>}/>
            <Route path='cpp' element={<CPP/>}/>
            <Route path='java' element={<Java/>}/>
            <Route path='python' element={<Python/>}/>
            <Route path='fullstack' element={<Fullstack/>}/>
          </Route>
          <Route path='ai-services' element={<AiServices/>}>
            <Route path='roadmap' element={<Roadmap/>}/>
            <Route path='quiz' element={<Quiz/>}/>
            <Route path='mock-interview' element={<MockInterview/>} />
            <Route path='review-resume' element={<ReviewResume/>} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
    </div>
  )
}

export default App
