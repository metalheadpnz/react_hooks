import React, {useState} from 'react';

// import './App.css';


function UseState() {

    function getInitialCounter() {
        console.log('...render')
        return 0
    }

    const [counter, setCounter] = useState(() => {
        return getInitialCounter()
    })

    const increment = () => {
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
    }
    const decrement = () => setCounter(counter - 1)

    return (
        <div>
            <h1>useState</h1>
            <h3>Счетчик: <span>{counter}</span></h3>
            <button className='btn btn-success' onClick={increment}>Add</button>
            <button className='btn btn-danger' onClick={decrement}>Subtract</button>
            <hr/>
        </div>
    );
}

export default UseState;
