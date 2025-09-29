import React from "react";
import { useLoaderData } from "react-router";

const UserDetail = () => {
  const user = useLoaderData();
  
   const {name , website, phone} = user;
  return (
    <div className="space-y-5 border border-amber-300 rounded-xl p-3">
      <h1 className="font-bold text-xl">User Details Here</h1>
      <h1><span className="font-semibold">Name:</span> {name}</h1>
      <h1><span className="font-semibold">Website:</span>  {website}</h1>
      <h1><span className="font-semibold">Phone:</span> {phone}</h1>
     
    </div>
  );
};

export default UserDetail;
