import React, {useState} from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import {ResultsContextProvider} from './contexts/ResultsContext.jsx' //Context from search results


const App = () => {

  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    let newBoolean = !display
    setDisplay(newBoolean)
  }
    return (
      
      <>
      <ResultsContextProvider>
        <Header/>
        { display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={handleClick}> Add a Toy </button>
        </div>
        
        <ToyContainer/>
        </ResultsContextProvider>
      </>
    )

}

export default App;
