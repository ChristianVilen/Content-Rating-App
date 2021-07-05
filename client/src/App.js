import './App.css'
import ContentComponent from './components/contentComponent'
import { useEffect, useState } from 'react'
import { getData } from './utils/requests'

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    getData().then((r) => setState(r))
  }, [])

  const filterHandler = () => {
    const content = state.filter((item) => item.review)
    content.sort((a, b) => {
      return b.review.rating - a.review.rating
    })

    return setState(content.slice(0, 10))
  }

  return (
    <div className="flex flex-col bg-primary-dark min-h-screen items-center justify-center text-lg">
      <div className="flex justify-center mt-10">
        <div className="mr-4 border">
          <h1 className="text-lg text-white pl-2 pr-2">Filters</h1>
        </div>
        <div className="ml-4">
          <button
            onClick={() => filterHandler()}
            className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
          >
            Top 10
          </button>
        </div>
        <div className="ml-4">
          <button
            onClick={() => {
              getData().then((r) => setState(r))
            }}
            className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
          >
            Show all
          </button>
        </div>
      </div>
      {state ? (
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
        <div>
          <p className="text-white">No data</p>
          <button
            className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
            onClick={() => {
              getData().then((r) => setState(r))
            }}
          >
            Reload
          </button>
        </div>
      )}
    </div>
  )
}

export default App
