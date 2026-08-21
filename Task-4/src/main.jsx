import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import UseStateTask from './UseStateTask'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UseStateTask /> */}
    <App/>
  </StrictMode>,
)
