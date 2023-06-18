import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Forms/Register";
import Login from "./Components/Forms/Login";
import Main from "./Components/Main/Main";
import Transaction from "./Components/Transactions/Transaction";
import Stats from "./Components/Stats/Stats";
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Transactions" element={<Transaction />} />
      <Route path="/Stats" element={<Stats />} />
    </Routes>
  );
}

export default App;
