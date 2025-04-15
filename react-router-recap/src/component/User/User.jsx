import React, { use } from "react";
import Userr from "../Userr/Userr";

const User = ({ userData }) => {
  const users = use(userData);
  return (
    <div>
      <h3>All User: {users.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {users.map((user) => (
          <Userr key={user.id} user={user}></Userr>
        ))}
      </div>
    </div>
  );
};

export default User;
