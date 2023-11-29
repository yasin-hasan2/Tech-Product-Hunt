// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <progress className="progress mx-auto w-full"></progress>;
  }
  if (user?.email) {
    return children;
  }

  return (
    <div>
      <Navigate state={location.pathname} to="/logIn"></Navigate>
    </div>
  );
};

export default PrivateRouter;
