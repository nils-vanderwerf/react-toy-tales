import React, { useContext } from 'react';
import { ResultsContext } from '../contexts/ResultsContext'

const ToyCard = () => {

  const [results] = useContext(ResultsContext)
  console.log(results)
    return (
      <div className="card">
        <h2>Woody</h2>
        <img src='' alt={'' /* Toy's Name */} className="toy-avatar" />
        <p>{'' /* Toy's Likes */} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    )
}

export default ToyCard;
