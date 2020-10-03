import React,{useState} from "react";

function Counter() {
    const [count,setCount] = useState(100)
    const incrementer = (type) => {
        //setCount((previousCount)=>previouscount)
        if(type === 'increment') setCount(count+1)
        if(type === 'decrement' && count > 0) setCount(count-1)
    }
    return <div>
        <h3>Count - {count}</h3>
        <button onClick={()=>{incrementer('increment')}}>Increment</button>
        <button onClick={()=>{incrementer('decrement')}}>Decrement</button>
    </div>
}

export {Counter};