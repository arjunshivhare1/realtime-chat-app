import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chats from "./pages/Chats/Chats";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/chats/:id" element={<Chats />} />
    </Routes>
  </BrowserRouter>
);

export default App;
