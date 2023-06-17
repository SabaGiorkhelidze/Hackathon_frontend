import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form method="POST" className="flex flex-col justify-center items-center">
        <div>
          <h1>Register</h1>
        </div>
        <div className="flex flex-col justify-between items-center h-48">
          <input
            type="text"
            className="border-2 border-black"
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            className="border-2 border-black"
            name="username"
            placeholder="username"
          />
          <input
            type="password"
            className="border-2 border-black"
            name="password"
            placeholder="enter password"
          />
          <input
            type="password"
            className="border-2 border-black"
            name="confirm"
            placeholder="confirm password"
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

export default Register;
