import './App.css'
import ContentComponent from './components/contentComponent'
import { useEffect, useState } from 'react'
import { getData, getTopTen } from './utils/requests'

function App() {
  const [state, setState] = useState([])
  const [page, setPage] = useState(5)

  useEffect(() => {
    getData(page).then((r) => setState(r))
  }, [page])

  const getTop = () => {
    getTopTen().then((r) => setState(r))
  }

  const updateState = (e) =>
    setState(state.map((item) => (item.id === e.id ? { ...item, ...e } : item)))

  return (
    <div className="flex flex-col bg-primary-dark min-h-screen items-center justify-center text-lg">
      <div className="flex justify-center mt-10">
        <div className="mr-4 border">
          <h1 className="text-lg text-white pl-2 pr-2">Filters</h1>
        </div>
        <div className="ml-4">
          <button
            onClick={() => getTop()}
            className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
          >
            Top 10
          </button>
        </div>
        <div className="ml-4">
          <button
            onClick={() => {
              getData(page).then((r) => setState(r))
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
              className="w-11/12 md:w-8/12 lg:w-6/12 mt-3 mb-5 bg-primary-default bg-opacity-75 rounded p-2"
              key={key}
            >
              <ContentComponent
                data={item}
                showButtons={true}
                textColor={'white'}
                updatedItem={updateState}
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
      <div className="p-6">
        <button
          className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
          onClick={() => setPage(page + 50)}
        >
          Load more
        </button>
      </div>
    </div>
  )
}

export default App
