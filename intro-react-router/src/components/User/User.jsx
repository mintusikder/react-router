import React from "react";
import "./Cart.css";
import { Link } from "react-router";
const User = ({ user }) => {
  const { id, name, username, email } = user;
//   const navigate = useNavigate()
//   const handelNavigate =() =>{
//         navigate("/mobile")
//   }
  return (
    <div className="cart">
      <h4>{name}</h4>
      <h4>{username}</h4>
      <h4>{email}</h4>
      <Link to={`/user/${id}`}>Details</Link>
      {/* <button o>Details of: {id}</button> */}
    </div>
  );
};

export default User;
