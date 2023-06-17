import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <form method="POST" className="flex flex-col justify-center items-center">
        <div>
          <h1>Login</h1>
        </div>
        <div className="flex flex-col justify-between items-center h-32">
          <input
            type="text"
            className="border-2 border-black"
            name="username"
          />
          <input
            type="password"
            className="border-2 border-black"
            name="password"
          />

          <Link to="/Main">
            {" "}
            <input type="submit" className="border-2 border-black" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
