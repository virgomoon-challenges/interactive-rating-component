import './App.css';
import TextRating from './Elements/TextRating';
import ChoiceRating from './Elements/ChoiceRating';
import ButtonSubmit from './Elements/ButtonSubmit';
import Reply from './Components/Reply';
import iconstar from './iconstar.svg' 
import { useState } from 'react';


function App() {

  const [isSubmitted,setIsSubmitted] = useState(false)

  // const handleSubmit = (e)=>({
  //   e.preventDefault()
  //   return setIsSubmitted(true)
  // })

  return (
    isSubmitted ? 
    <div className="App">
      <Reply /> 
    </div> 

    : 
    <div className="App" onSubmit={(e)=> setIsSubmitted(true)}>
      <form className='container' >
        <img src={iconstar} className='star' />
        <TextRating />
        <ChoiceRating />
        <ButtonSubmit />
      </form>
    </div>
      
  );
}

export default App;
