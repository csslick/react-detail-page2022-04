import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './Home'
import Works from './Works'
import WorkDetail from './WorkDetail'
import About from './About'

export default function Router() {
  
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >Home</NavLink> |{" "}
          <NavLink 
            to="works" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >Works</NavLink> |{" "}
          <NavLink 
            to="about"     
            className={({ isActive }) => (isActive ? 'active' : '')}        
          >About</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="about" element={<About />} />
          <Route path="workdetail/:id" element={<WorkDetail />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
