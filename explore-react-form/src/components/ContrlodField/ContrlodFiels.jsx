import React, { useState } from "react";

const ContrlodFiels = () => {
    const [password, setPassword] = useState("")
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("submit")
  };
  const handelPassChange = e =>{
    console.log(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input placeholder="Your name" name="name" type="text" /> <br />
        <input placeholder="Your password" onChange={handelPassChange} defaultValue={password} name="password" type="password" />
        br
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContrlodFiels;
