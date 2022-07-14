import React, {useState, useEffect, EffectCallback} from 'react';

const UseEffect = () => {

    const [type, setType] = useState('users')
    const [content, setContent] = useState('')
    const [pos, setPos] = useState({x:0, y:0})

    // useEffect(() => {
    //     console.log('fetch:', type)
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(response => response.json())
    //         .then(json => setContent(json))
    //
    // }, [type])

    const mouseMoveHandler = (event: MouseEvent) => {
      setPos({x: event.clientX, y:event.clientY})

    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
    },[])


    return (
        <div>
            <h1>useEffect</h1>
            <h2>ресурс: {type}</h2>

            <button className='btn btn-primary' onClick={() => setType('users')}>Пользователи</button>
            <button className='btn btn-primary' onClick={() => setType('todos')}>Todos</button>
            <button className='btn btn-primary' onClick={() => setType('posts')}>Посты</button>

            {/*<pre>{JSON.stringify(content, null, 2) }</pre>*/}
            <pre>{JSON.stringify(pos, null, 2) }</pre>

        </div>
    );
};

export default UseEffect;