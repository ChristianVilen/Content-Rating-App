import './App.css'
import ContentComponent from './components/contentComponent'
import { useEffect, useState } from 'react'
import { getData } from './utils/requests'

function App() {
  const [state, setState] = useState({})
  useEffect(() => {
    getData().then((r) => setState(r))
  }, [])

  return (
    <div className="flex flex-col bg-primary-dark min-h-screen items-center justify-center text-lg">
      {state.length ? (
        state.map((item, key) => {
          return (
            <div
              className="w-6/12 mt-3 mb-5 bg-primary-default bg-opacity-75 rounded p-2"
              key={key}
            >
              <ContentComponent
                data={item}
                showButtons={true}
                textColor={'white'}
              />
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
