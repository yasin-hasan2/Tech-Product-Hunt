// import React from 'react';

const Review = ({ comments }) => {
  const { userComment, userEmail, userName, userPhoto } = comments;

  return (
    <div>
      <div className=" p-5 bg-slate-600 w-full m-2 rounded-xl">
        <div className="flex items-center">
          <div className="avatar ">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userPhoto} />
            </div>
          </div>
          <div className="ml-5 text-white ">
            <h2 className="text-2xl"> {userName} </h2>
            <small> {userEmail} </small>
          </div>
        </div>
        <h3 className=" mt-5 text-xl border p-1 rounded-lg text-slate-300 ">
          {" "}
          {userComment}{" "}
        </h3>
      </div>
    </div>
  );
};

export default Review;
