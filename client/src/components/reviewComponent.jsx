import React, { useState } from 'react'
import { updateData } from '../utils/requests'

const ReviewComponent = ({ props, isOpen }) => {
  const [rating, setRating] = useState('5')
  const [reviewText, setReviewText] = useState('')

  const saveRatings = () => {
    let review = {
      rating,
      reviewText,
    }

    updateData(props, review).then((r) => console.log('res', r))
  }

  return (
    <div className="flex justify-center mt-5 items-center outline-none focus:outline-none">
      <div className="flex flex-col items-center w-full bg-primary-light shadow-md hover:shadow-lg rounded-2xl">
        <div className="flex pt-5 pb-5">
          <div className="flex-auto text-left text-white mr-5">
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
              {'  '}
              {props.review ? props.review.rating : rating}
            </div>
          </div>
          <div className="flex-auto text-right ml-5 sm:w-auto lg:w-80">
            <div>
              <textarea
                className="text-xs w-full bg-gray-200 border rounded"
                id="review"
                rows="3"
                value={props?.review?.reviewText}
                placeholder="Review..."
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-8/12">
          <div className="flex-auto text-center">
            <button
              onClick={isOpen}
              className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
            >
              Cancel
            </button>
          </div>
          <div className="flex-auto text-center">
            <button
              onClick={() => {
                saveRatings()
              }}
              className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewComponent
