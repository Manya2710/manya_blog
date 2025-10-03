import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projectlist from './project_list'
import BlogList from './blog_list'
import FrontPage from './front_page'

//blog list
import Ladle_metallurgy from './blog_list/1_Ladle_mett';


function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<FrontPage/>} />
            <Route path="/b" element={<BlogList/>} />
            <Route path="/p" element={<Projectlist/>} />


            {/* blog list */}
            <Route path="/laddle_mettalurgy" element={<Ladle_metallurgy/>} />

          </Routes>
      </Router>


    </>
  )
}

export default App
