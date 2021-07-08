import ContentComponent from './components/contentComponent'
import { useEffect, useState } from 'react'
import {
  getCategories,
  getCategory,
  getData,
  getTopTen,
} from './utils/requests'

function App() {
  const [state, setState] = useState([])
  const [page, setPage] = useState(5)
  const [categories, setCategories] = useState([])
  const [isTopTen, setIsTopTen] = useState(false)

  useEffect(() => {
    setIsTopTen(false)
    getData(page).then((r) => setState(r))
    getCategories().then((r) => setCategories(r))
  }, [page])

  const getTop = () => {
    getTopTen().then((r) => setState(r))
    setIsTopTen(true)
  }

  // Loop over state to find modified item. Spread the current item in state and compare diffs. Update changed values.
  const updateState = (e) =>
    setState(state.map((item) => (item.id === e.id ? { ...item, ...e } : item)))

  const categoryHandler = (category) => {
    getCategory(category).then((r) => setState(r))
  }

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
          <div>
            <div>
              <label
                htmlFor="categories"
                className="text-white text-sm text-center"
              >
                Topics
              </label>
            </div>
            <div>
              <select
                name="topics"
                id="topics"
                onChange={(e) => categoryHandler(e.target.value)}
                defaultValue="Hello"
              >
                <option defaultValue>Select</option>
                {categories.map((item, key) => (
                  <option key={key} value={item}>
                    {item}
                  </option>
                ))}
              </select>
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
        </>
      ) : (
        <div>
          <div className="m-8 loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-10 w-10" />
          <div className="flex justify-center">
            <button
              className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600"
              onClick={() => {
                getData(5).then((r) => setState(r))
                setIsTopTen(false)
              }}
            >
              Reload?
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
