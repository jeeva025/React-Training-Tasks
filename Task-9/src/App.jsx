import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Products from './components/Products'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import WebDevelopment from './components/WebDevelopment'
import UIUXDesign from './components/UIUXDesign'
import AppDevelopment from './components/AppDevelopment'
import './App.css'
function App() {
  return (
    <div className='app-con'>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Service/>} >
            
              <Route path='web-dev' element={<WebDevelopment/>}/>
              <Route path='app-dev' element={<AppDevelopment/>}/>
              <Route path='design' element={<UIUXDesign/>}/>
            
          </Route>
          <Route path='/products' element={<Products/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App