import React from "react";
import { useLoaderData } from "react-router";

const UserDetail = () => {
  const user = useLoaderData();
  
   const {name , website, phone} = user;
  return (
    <div className="space-y-5 border border-amber-300 rounded-xl p-2">
      <h1 className="font-bold text-xl">User Details Here</h1>
      <h1>Namae: {name}</h1>
      <h1>Website:  {website}</h1>
      <h1>Phone: {phone}</h1>
     
    </div>
  );
};

export default UserDetail;
