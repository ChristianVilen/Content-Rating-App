import React, { useState, useEffect } from 'react'
import { updateData } from '../utils/requests'

const ReviewComponent = ({ props, isOpen, updateStateData }) => {
  const [rating, setRating] = useState()
  const [reviewText, setReviewText] = useState('')
  const [requestResult, setRequestResult] = useState({ noReq: 'no req' })

  useEffect(() => {
    if (props.review !== undefined) {
      setRating(props.review.rating)
    } else {
      setRating(5)
    }
  }, [props.review])

  const saveRatings = () => {
    let review = {
      rating,
      reviewText,
    }

    updateData(props, review)
      .then((r) => {
        setRequestResult({ success: 'success' })
        setReviewText('')
        setRating(null)
        isOpen()
        updateStateData(r)
      })
      .catch((e) => setRequestResult({ err: 'Something went wrong', e }))
  }

  const ButtonRow = () => {
    if (requestResult.noReq) {
      return (
        <>
          <div className="flex-auto text-center mb-4">
            <button
              onClick={isOpen}
              className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600"
            >
              Cancel
            </button>
          </div>
          <div className="flex-auto text-center mb-4">
            <button
              onClick={() => {
                saveRatings()
              }}
              className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600"
            >
              Submit
            </button>
          </div>
        </>
      )
    }

    if (requestResult.error) return <div>An error occurred</div>
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
                defaultValue={
                  props.review?.rating === undefined
                    ? null
                    : props.review.rating
                }
                onChange={(e) => setRating(parseInt(e.target.value))}
              />
              {'  '}
              {rating}
            </div>
          </div>
          <div className="flex-auto text-right ml-5 sm:w-auto lg:w-80">
            <div>
              <textarea
                className="text-xs w-full bg-gray-200 border rounded"
                id="review"
                rows="3"
                placeholder="Review..."
                defaultValue={
                  props.review?.reviewText === undefined
                    ? null
                    : props.review.reviewText
                }
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-8/12">{ButtonRow()}</div>
      </div>
    </div>
  )
}

export default ReviewComponent
