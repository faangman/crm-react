import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then((res) => {
                console.log(res)
                // setMessage(res.data)
            })
            .catch((err) => {
                console.log(err)
                // setError(err)
            })
    },[])

  return (
    <div className="App">
      Hello, this is a new crm.

    </div>
  );
}

export default App;
