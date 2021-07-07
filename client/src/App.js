import ContentComponent from './components/contentComponent'
import { useEffect, useState } from 'react'
import { getData, getTopTen } from './utils/requests'

function App() {
  const [state, setState] = useState([])
  const [page, setPage] = useState(5)
  const [isTopTen, setIsTopTen] = useState(false)

  useEffect(() => {
    setIsTopTen(false)
    getData(page).then((r) => setState(r))
  }, [page])

  const getTop = () => {
    getTopTen().then((r) => setState(r))
    setIsTopTen(true)
  }

  const updateState = (e) =>
    setState(state.map((item) => (item.id === e.id ? { ...item, ...e } : item)))

  return (
    <div className="flex flex-col bg-primary-dark min-h-screen items-center justify-center text-lg">
      {state.length ? (
        <>
          <div className="flex justify-center mt-10 mb-5">
            <div className="mr-3">
              <button
                onClick={() => {
                  getData(page).then((r) => setState(r))
                  setIsTopTen(false)
                }}
                className="text-sm lg:text-lg bg-secondary-default hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600"
              >
                Show all
              </button>
            </div>
            <div className="ml-3">
              <button
                onClick={() => getTop()}
                className={
                  isTopTen
                    ? 'bg-primary-dark text-sm lg:text-lg hover:bg-secondary-dark text-white p-2 rounded ring-2 focus:ring-blue-600'
                    : 'bg-secondary-default text-sm lg:text-lg hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600'
                }
              >
                Top 10
              </button>
            </div>
          </div>
          <>
            {state.map((item, key) => {
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
            })}
          </>
        </>
      ) : (
        <div>
          <p className="text-white">No data</p>
          <button
            className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600"
            onClick={() => {
              getData(5).then((r) => setState(r))
              setIsTopTen(false)
            }}
          >
            Reload
          </button>
        </div>
      )}
      <div className="p-6">
        {!isTopTen && state.length ? (
          <button
            className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600"
            onClick={() => setPage(page + 5)}
          >
            Load more
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default App
