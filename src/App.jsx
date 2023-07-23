import { useEffect } from 'react'
import { Toaster,toast } from 'react-hot-toast'
import './App.css'
import profile from "./assets/pfp.jpg";
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import About from './components/About/About';
import SkillContainer from './components/Skiils/SkillContainer';
import ProjectContainer from './components/Projects/ProjectContainer';
function App() {
  useEffect(()=>{
    toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={profile}
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Funfact
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    People call me Notamit
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ))
},[])
  return (
    <div className='bg-background'>
    <Navbar/>
    <Home/>
    {/* <About/> */}
    <SkillContainer/>
    <ProjectContainer/>
    <Toaster/>
    </div>
  )
}

export default App
