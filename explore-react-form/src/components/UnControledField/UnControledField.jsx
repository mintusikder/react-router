import React, { useRef } from "react";

const UnControledField = () => {
    const emailRef = useRef('')
    const passRef = useRef("")
    const handelSubmit =(e) =>{
        e.preventDefault()
        const email = emailRef.current.value 
        const pass = passRef.current.value 
        console.log(email,pass)
    }
  return (
    <div>
      <form action="" onSubmit={handelSubmit}>
        <input ref={emailRef} type="email" placeholder="email" name="email" /> <br />
        <input ref={passRef} type="password" placeholder="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControledField;
