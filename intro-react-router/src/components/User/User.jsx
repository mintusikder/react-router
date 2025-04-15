import React, { Suspense, useState } from "react";
import "./Cart.css";
import { Link, Navigate, useLocation } from "react-router";
import UserInfo from "../UserInfo/UserInfo";
const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);
  const location = useLocation();
  console.log(location);
  const { id, name, username, email } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  //   const navigate = useNavigate()
  //   const handelNavigate =() =>{
  //         navigate("/mobile")
  //   }

  if (visitHome) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div className="cart">
      <h4>{name}</h4>
      <h4>{username}</h4>
      <h4>{email}</h4>
      <Link to={`/user/${id}`}>Details</Link>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "hide" : "show"} info
      </button>
      <button onClick={() => setVisitHome(true)}>Visit</button>
      {showInfo && (
        <Suspense fallback={<p>Loading..</p>}>
          <UserInfo userPromise={userPromise}></UserInfo>
        </Suspense>
      )}
    </div>
  );
};

export default User;
