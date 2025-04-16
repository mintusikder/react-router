import React from "react";

const FormAction = () => {
    const handelSubmit =(e) =>{
        // e.preventDefault()
        console.log(e.get("name"))
    }
  return (
    <div >
      <form action={handelSubmit}>
        <input type="text" placeholder="name" name="name" /> <br />
        <input type="email" placeholder="email" name="email" /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
