import React from "react";
import useImportHook from "../hook/UseInputHook";

const HookForm = () => {
  const [name, nameOnChange] = useImportHook("");
  const [email, emailOnChange] = useImportHook("");
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("handelSubmit", name,email);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input defaultValue={name} type="text" onChange={nameOnChange} />
        <br />
        <input
          defaultValue={email}
          type="email"
          name=""
          onChange={emailOnChange}
          id=""
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
