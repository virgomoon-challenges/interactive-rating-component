import React from 'react'

function ChoiceRating() {

    const arr = Array(5).fill().map((_,i) => i+1)
    // console.log(arr)

    const ratingButtons = arr.map((num)=>{
        return (
            <button key={num} className='num-button' >
                {num}
            </button>
        )
    })

  return (
    <div className='choice center' >
        {ratingButtons}
    </div>
  )
}

export default ChoiceRating