import './App.css';
import TextRating from './Elements/TextRating';
import ChoiceRating from './Elements/ChoiceRating';
import ButtonSubmit from './Elements/ButtonSubmit';
import iconstar from './iconstar.svg' 

function App() {
  return (
    <div className="App">
      <div className='container' >
        <img src={iconstar} className='num-button' />
        <TextRating />
        <ChoiceRating />
        <ButtonSubmit />
      </div>
    </div>
  );
}

export default App;
