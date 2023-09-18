import './App.css';
import TextRating from './Elements/TextRating';
import ChoiceRating from './Elements/ChoiceRating';
import ButtonSubmit from './Elements/ButtonSubmit';
import Reply from './Components/Reply';
import iconstar from './iconstar.svg';
import thankyou from './illustration-thank-you.svg'
import { useState } from 'react';


function App() {

  const [isSubmitted,setIsSubmitted] = useState(false)
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClicked = (rating)=>{
    setSelectedRating(rating)
    console.log(rating)
    console.log(selectedRating)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    return setIsSubmitted(true)
  }
  const titleText = "How did we do?"
  const mainText = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"

  const arr = Array(5).fill().map((_,i) => i+1)

  const ratingButtons = arr.map((num)=>{
    
      return (
          <button key={num} 
          type='button'
          className='num-button' 
          onClick={()=> handleRatingClicked(num)}
          >
              {num}
          </button>
      )
  })


  return (
    isSubmitted ? 
    <div className="App">
      <div className="reply-container">
        <img src={thankyou} style={{height:150, width:'auto'}}/>
        <div className="selected">You selected  out of 5</div>
        <p className="title">Thank you!</p>
        <p className="main-text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </div> 

    : 
    <div className="App" onSubmit={handleSubmit}>
      <form className='container' >
        <img src={iconstar} className='star' />
        <div className='left'>
            <p className='title'>{titleText}</p>
            <p className='main-text'>{mainText}</p>
        </div>
        <div className='choice center' >
            {ratingButtons}
        </div>
        <ButtonSubmit />
      </form>
    </div>
      
  );
}

export default App;
