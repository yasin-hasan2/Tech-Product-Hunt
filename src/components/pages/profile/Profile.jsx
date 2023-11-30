// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className=" mx-auto  w-96 card  bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-full  " src={user.photoURL} alt="Movie" />
        </figure>
        <div className=" text-[#FFFFFF] card-body">
          <h2 className="card-title"> Name : {user.displayName} </h2>
          <p> Email : {user.email} </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
