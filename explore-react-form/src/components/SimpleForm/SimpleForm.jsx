import React from "react";

const SimpleForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("form submite" ,e.target.name.value);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input placeholder="Your name" name="name" type="text" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
