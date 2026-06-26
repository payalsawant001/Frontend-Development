import { useState } from 'react';

function Counter(){
    const[count, setCount] = useState(0);
    return <>
       <h1>Count is : {count}</h1>
       <button onClick={
        ()=>{
            setCount(count+1);
        }
       }>
       Increase
       </button>

       <button onClick={
        ()=>{
            if(count>0){
                setCount(count-1);
            }
        }
       }>
       Decrease
       </button>


    </>
};

export default Counter;
