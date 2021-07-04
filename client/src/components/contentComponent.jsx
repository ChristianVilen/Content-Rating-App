import React, { useState } from 'react'
import ModalComponent from './modalComponent'
import { shortenText } from '../utils/helpers'

const ContentComponent = ({ data, showButtons, textColor }) => {
  const [expandText, setExpandText] = useState(false)
  const [open, setOpen] = useState(false)
  const showMedia = (data) => {
    if (data.mediaType === 'video') {
      return (
        <div>
          <video controls>
            <source src={data.contentUrl} type="video/mp4" />
          </video>
        </div>
      )
    }

    return <img src={data.contentUrl} alt={data.description} />
  }

  const closeModal = () => setOpen(!open)

  return (
    <div>
      <div className="flex justify-center">{showMedia(data)}</div>
      <h2 className={'text-xl font-semi-bold text-' + textColor}>
        {data.title}
      </h2>
      <hr />
      <div>
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
        {showButtons ? (
          <div className="flex justify-evenly mt-4">
            <button className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600">
              View Reviews
            </button>
            <button
              className="text-sm bg-secondary-default hover:bg-secondary-dark text-white p-1 rounded focus:ring-2 focus:ring-blue-600"
              onClick={() => setOpen(!open)}
            >
              Review Content
            </button>
          </div>
        ) : (
          <></>
        )}
      </>
      <div>
        {open ? <ModalComponent props={data} isOpen={closeModal} /> : <></>}
      </div>
    </div>
  )
}

export default ContentComponent
