import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/chats");
  }, []);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
