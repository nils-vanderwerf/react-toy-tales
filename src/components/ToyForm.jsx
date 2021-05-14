import React, {useContext, useState} from 'react';
import { ResultsContext } from '../contexts/ResultsContext'


const ToyForm = () => {
  const [results, setResults] = useContext(ResultsContext)
  const [toyToSearch, setToyToSearch] = useState("")
  const [toyURL, setToyURL] = useState("")

  const handleFetch = (event) => {
    event.preventDefault()
    const toyName = toyToSearch
    fetch(`http://localhost:3000/toys?name=${toyName}`)
    .then(response => response.json())
    .then(data => {
      if (data.length !== 0) {
        setResults(data)
      }
      else {
        console.log("No toys with this name")
      }
    })
    .catch(error => console.error(error))
  }

  const handleChangeToy = event => {
    setToyToSearch(event.target.value)
  }

  const handleChangeURL = event => {
    setToyURL(event.target.value)
  }


    return (
        <div className="container">
          <form className="add-toy-form"  onSubmit={handleFetch}>
            <h3>Create a toy!</h3>
            <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={handleChangeToy}/>
            <br/>
            <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={handleChangeURL}/>
            <br/>
            <input type="submit" name="submit" value="Create New Toy" className="submit"/>
          </form>
      </div>
    );
}

export default ToyForm;
