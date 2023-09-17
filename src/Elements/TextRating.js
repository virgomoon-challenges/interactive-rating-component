import React from 'react'

function TextRating() {

    const titleText = "How did we do?"
    const mainText = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"

  return (
    <div className='left'>
        <p className='title'>{titleText}</p>
        <p className='main-text'>{mainText}</p>
    </div>
  )
}

export default TextRating