import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
    const { id, name , email} = user;
  return <div className="border-2 border-teal-500 p-2 rounded-2xl mb-5">
        <h1><span className="font-semibold">Name:</span> {name}</h1>
        <h1><span className="font-semibold">Email:</span> {email}</h1>
       <div className=" mt-3 border px-3 py-1 border-green-400 rounded-xl hover:bg-green-300 bg-green-200">
        <Link to={`/users/${id}`} >Show Details</Link>
       </div>
  </div>;
};

export default User;
