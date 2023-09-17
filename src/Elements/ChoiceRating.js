import React from 'react'

function ChoiceRating() {

    const arr = Array(5).fill().map((_,i) => i+1)
    console.log(arr)

    const ratingButtons = arr.map((num)=>{
        return (
            <div key={num} className='num-button' >
                {num}
            </div>
        )
    })

  return (
    <div className='choice center' >
        {ratingButtons}
    </div>
  )
}

export default ChoiceRating