import React,{useState} from "react";

export default function TodoList() {
    const t = ['task1','task2','task3','task4'];
    
    const [tasks,setTasks] = useState(t);
    const [name,setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }

    console.log(tasks);
    return <div>
        <ul>{
            tasks.map((task,i) => <li key={i}>{task}</li>)
        }</ul>
        <input type="text" onChange={handleChange} value={name} />
        <button onClick={() => {
            setTasks([...tasks,name])
            setName('');
        }}>Add to List!</button>
    </div>
}