import React, {useState, createContext} from 'react';
const ResultsContext = createContext()

const ResultsContextProvider = (props) => {
    const [results, setResults] = useState([])

    return (
        <ResultsContext.Provider
            value= {[results, setResults]}>
                {props.children}
        </ResultsContext.Provider>

    )
}

export {ResultsContext, ResultsContextProvider};