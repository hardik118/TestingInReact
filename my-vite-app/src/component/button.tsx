import React, { useState } from "react";



const Button=   () => {
  const[email,setemail]= useState('');
  const [password, setpassword]= useState('');
  const[msg,setmsg]= useState('');
  const handleSingup= async (e: React.FormEvent)=>{
    e.preventDefault();
try {
  const data={
    email: email, 
    password: password
  }
  const response= await  fetch(`http:/localhost/email`,{
    method : "POST",
    body: JSON.stringify(data)
  })
  if(response.ok){
  
  
  setmsg("singedUp");
  }
} catch (error) {
  setmsg("Not SingedUp");
  
}
  
  
  }

  return <form onSubmit={handleSingup}>
    <label htmlFor="email">Email</label>
    <input  value={email} onChange={(e)=>setemail(e.target.value)} name="email" id="email" required></input>
    <label htmlFor="password">Password</label>
    <input required value={password} onChange={(e)=>setpassword(e.target.value)} type="text" name="password" id="password" />
    <button type="submit" >Signup</button>
    {
      msg == "singedUp"  && <h1>User is registered</h1>
    }
    {
      msg == "Not SingedUp"  && <h1>User is Not  registered</h1>
    }
  </form>
};

export default Button;
