import React, { useState } from 'react'
import ReviewComponent from './reviewComponent'
import { shortenText } from '../utils/helpers'

const ContentComponent = ({
  data,
  showButtons: isReview,
  textColor,
  updatedItem,
}) => {
  const [expandText, setExpandText] = useState(false)
  const [openReview, setOpenReview] = useState(false)
  const showMedia = (data) => {
    if (data.mediaType === 'video') {
      return (
        <div>
          <video controls poster={data.previewUrl}>
            <source src={data.contentUrl} type="video/mp4" />
          </video>
        </div>
      )
    }

    return <img src={data.contentUrl} alt={data.description} />
  }

  const closeModal = () => setOpenReview(!openReview)
  const updateData = (event) => {
    updatedItem(event)
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className={'text-lg font-semi-bold text-' + textColor}>
          {data.title}
        </h1>
        <div>
          {data.review ? (
            <h2 className="text-lg text-white">
              <i>Rating:</i> {data.review.rating}/10
            </h2>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-2">{showMedia(data)}</div>
      <div className="pl-2 pr-2">
        <p
          className={
            'text-sm cursor-pointer hover:opacity-75 text-' + textColor
          }
          onClick={() => setExpandText(!expandText)}
        >
          {!expandText ? shortenText(data.description) : data.description}
        </p>
      </div>
      <>
        {data.review ? (
          <div className="p-2">
            <div>
              <h4 className="text-lg text-white p-2">My review</h4>
            </div>
            <div className="flex justify-between w-full text-white border">
              <div className="flex-auto text-sm p-2">
                {data.review.reviewText}
              </div>
              <div className="flex-1 text-center">{data.review.rating}/10</div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
      <>
        {isReview ? (
          <div className="flex justify-evenly mt-4 mb-2">
            <button
              className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-2 rounded focus:ring-2 focus:ring-blue-600"
              onClick={() => setOpenReview(!openReview)}
            >
              {data.review ? 'Edit Review' : 'Add a Review'}
            </button>
          </div>
        ) : (
          <></>
        )}
      </>
      <div>
        {openReview ? (
          <ReviewComponent
            props={data}
            isOpen={closeModal}
            updateStateData={updateData}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default ContentComponent
