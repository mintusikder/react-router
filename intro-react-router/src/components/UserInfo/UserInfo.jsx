import React, { use } from "react";

const UserInfo = ({ userPromise }) => {
  const user = use(userPromise);
  const { email ,name} = user;
  return (
    <div>
      <h3>{email}</h3>
      <h3>{name}</h3>
    </div>
  );
};

export default UserInfo;
