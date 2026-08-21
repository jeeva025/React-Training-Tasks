
import './App.css'
import ListRendering from './ListRendering'

function App() {
  const users = [
        {
            name : "Jeeva",
            role : "Java Full Stack Developer",
            company : "Stackly",
            experiance : "6 months",
            branch : "Chennai"

        },
        {
            name : "Aadhi",
            role : "Python Full Stack Developer",
            company : "Stackly",
            experiance : "8 months",
            branch : "Salem"

        },
        {
            name : "Kishore",
            role : "Frontend Developer",
            company : "Stackly",
            experiance : "3 months",
            branch : "Banglore"

        },
        {
            name : "Joshua",
            role : "AI & ML Engineer",
            company : "Stackly",
            experiance : "2 years",
            branch : "Hydrabad"

        },
        {
            name : "Akash",
            role : "Java Backend Developer",
            company : "Stackly",
            experiance : "10 months",
            branch : "Chennai"

        },
        {
            name : "Imran",
            role : "DevOps Engineer",
            company : "Stackly",
            experiance : "4 months",
            branch : "Pune"

        }
    ]
  return (
    <>
      <ListRendering users = {users}/>
    </>
  )
}

export default App
