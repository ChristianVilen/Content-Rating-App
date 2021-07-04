import React, { useState } from 'react'
import ContentComponent from './contentComponent'
import { updateData } from '../utils/requests'

const ModalComponent = ({ props, isOpen }) => {
  const [rating, setRating] = useState('5')
  const [reviewText, setReviewText] = useState('')

  const saveRatings = () => {
    console.log(props)
    let review = {
      rating,
      reviewText,
    }

    updateData(props, review).then((r) => console.log('res', r))
  }

  return (
    <>
      <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
        <div className="flex flex-col items-center p-8 bg-white shadow-md hover:shadow-lg rounded-2xl">
          <div className="flex w-8/12">
            <ContentComponent
              data={props}
              showButtons={false}
              textColor={'black'}
              isModal={true}
            />
          </div>
          <div className="flex w-8/12 pt-6">
            <div className="flex-auto text-left">
              <div>
                <label htmlFor="ratingSlider">Review 1-10</label>
              </div>
              <div>
                <input
                  className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128"
                  id="ratingSlider"
                  type="range"
                  min="1"
                  max="10"
                  defaultValue={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                {rating}
              </div>
            </div>
            <div className="flex-auto text-right">
              <div>
                <textarea
                  className="rounded-lg w-100 border"
                  id="review"
                  rows="3"
                  placeholder="Teksti tulee tähän"
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              className="text-lg w-20 mr-3 bg-transparent hover:bg-secondary-default text-secondary-dark hover:text-white border border-blue-500 hover:border-transparent rounded"
              onClick={isOpen}
            >
              Cancel
            </button>
            <button
              className="text-lg ml-3 w-20 bg-secondary-default hover:bg-secondary-dark text-white hover:text-white border border-blue-500 hover:border-transparent rounded"
              onClick={() => saveRatings()}
            >
              Rate
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalComponent
