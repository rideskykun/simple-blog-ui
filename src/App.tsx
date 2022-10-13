import React, {FC} from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Post from "./pages/post";

const App:FC = () => {

  return (
      <div className={'animation-background'}>
          <Router>
              <Header/>
              <div className={'content-wrapper'}>
                  <Routes>
                      <Route path={'/'} element={<Home/>}/>
                      <Route path={'/article'} element={<Post/>}/>
                  </Routes>
              </div>
              <Footer/>
          </Router>
      </div>
  )
}

export default App
