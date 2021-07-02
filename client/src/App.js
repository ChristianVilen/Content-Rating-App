import './App.css'
import ContentComponent from './components/contentComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [state, setState] = useState({})
  useEffect(() => {
    axios
      .get('http://localhost:8000/')
      .then((res) => {
        setState(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="flex flex-col bg-background min-h-screen items-center justify-center text-lg">
      {state.length ? (
        state.map((item, key) => {
          return (
            <div className="w-6/12 mt-3 mb-5 bg-primary bg-opacity-75 rounded p-2">
              <ContentComponent data={item} key={key} />
            </div>
          )
        })
      ) : (
        <p className="text-white">No data</p>
      )}
    </div>
  )
}

export default App
