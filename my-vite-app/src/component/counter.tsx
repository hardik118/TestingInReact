import React, { useState } from "react";

export const Counter=()=>{
    const[cal,setval]= useState(6);
    const[val, setvalue]= useState('');
     
    const handleClick=()=>{
        alert("plases pass the name in input file before subitting ");
    }
    const handleMouseDown=()=>{
        setval((cal)=>cal+2);
        console.log(cal);
    }
    const handleInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
setvalue(e.target.value);

    }
    return <div className="w-full h-screen">
        <label htmlFor="name">Name</label>
        <input value={val} onChange={handleInput} aria-label='Name' type="text"  name="name"/>
        <button  onClick={handleClick}>Send </button>
<div className="h-42 w-full bg-red-100 ">
<button className={`w-${cal} h-${cal} bg-red-100 `} onMouseDown={handleMouseDown}>event</button>

</div>

    </div>
}

/*we will make a drag and drop component and use pointer to test its functionality*/