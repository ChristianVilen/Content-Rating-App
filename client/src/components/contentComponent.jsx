import React, { useState } from 'react'

const ContentComponent = (props) => {
  const [expandText, setExpandText] = useState(false)
  const showMedia = (props) => {
    if (props.mediaType === 'video') {
      return (
        <div>
          <video controls>
            <source src={props.contentUrl} type="video/mp4" />
          </video>
        </div>
      )
    }

    return <img src={props.contentUrl} alt={props.description} />
  }

  const shortenText = (text) => {
    let maxLength = 100

    if (!text) {
      return
    }

    return text.length > maxLength
      ? text.substr(0, maxLength - 1) + '...'
      : text
  }

  return (
    <div>
      <div className="flex justify-center">{showMedia(props.data)}</div>
      <h2 className="text-white text-xl font-semi-bold">{props.data.title}</h2>
      <hr />
      <p
        className="text-white text-sm cursor-pointer hover:opacity-75"
        onClick={() => setExpandText(!expandText)}
      >
        {!expandText
          ? shortenText(props.data.description)
          : props.data.description}
      </p>
      <div className="flex justify-evenly mt-4">
        <button className="text-sm bg-turq-default hover:bg-turq-light text-white p-1 rounded focus:ring-2 focus:ring-blue-600">
          View Reviews
        </button>
        <button className="text-sm bg-turq-default hover:bg-turq-light text-white p-1 rounded focus:ring-2 focus:ring-blue-600">
          Review Content
        </button>
      </div>
    </div>
  )
}

export default ContentComponent
