import React, {useState, useEffect, useContext} from 'react';
import { ResultsContext } from '../contexts/ResultsContext';
import ToyCard from './ToyCard'

const ToyContainer = () => {
  const [results, useResults] = useContext(ResultsContext)
  const [toys, setToys] = useState([])
    const addResults = () => {
      console.log(results)
      const newToy = [...toys, results]
      setToys(newToy)
    }
  useEffect(() => {
    addResults()
  }, [results])
  console.log(toys)
  return (
    
    <div id="toy-collection">
      
      {toys.map((toy, index) => {
        console.log("This call", toy[index].image)
        return(
        <div className="toy">
          <ToyCard key={toy.id} toy={toy} imgURL={toy.image}/>
        </div>
        )
      })}
    </div>
  )
}

export default ToyContainer;
