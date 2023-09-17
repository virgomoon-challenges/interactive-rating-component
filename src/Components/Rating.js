import React from 'react';
import Star from '../Elements/Star';
import TextRating from '../Elements/TextRating';
import ChoiceRating from '../Elements/ChoiceRating';
import ButtonSubmit from '../Elements/ButtonSubmit';

function Rating() {
  return (
    <div className='container' >
        <Star />
        <TextRating />
        <ChoiceRating />
        <ButtonSubmit />
    </div>
  )
}

export default Rating