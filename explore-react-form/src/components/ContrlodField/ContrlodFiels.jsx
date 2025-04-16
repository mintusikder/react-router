import React, { useState } from "react";

const ContrlodFiels = () => {
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const handelPassChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if(password.length < 6) {
        setError("Need 6 character")
    }else{
        setError("")
    }
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input placeholder="Your name" name="name" type="text" /> <br />
        <input
          placeholder="Your password"
          onChange={handelPassChange}
          defaultValue={password}
          name="password"
          type="password"
        />
        br
        <input type="submit" value="Submit" />
      </form>
      <p>{error}</p>
    </div>
  );
};

export default ContrlodFiels;
