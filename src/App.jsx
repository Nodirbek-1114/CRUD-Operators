import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Student from './pages/Student/Student'
import Error from './components/Error/Error'

import LANG from './lang/lang'

import {context} from './context/index'

const App = () => {

  const [lang, setLang] = useState(localStorage.getItem('language') || 'uzb');
  const [mode, setMode] = useState(localStorage.getItem('them'));


    const headerStyle = {
        backgroundColor: mode === 'LIGHT' ? "#8388cC" : '#444',
        color: mode === 'LIGHT' ? "black" : "white",
    }

  return (
    <>
      <context.Provider value={{lang, mode,LANG}}>
        <BrowserRouter>
          <div className="container">
            <div className="wrapper">
              <Sidebar />
              <div className="d-flex flex-column w-100">
                <Header setLang={setLang} setMode={setMode}/>
                <main className='p-3' style={headerStyle}>
                  <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Student' element={<Student />} />
                    <Route path="*" element={<Error />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </context.Provider>
    </>
  )
}

export default App;