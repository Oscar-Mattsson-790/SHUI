import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainView from "./views/MainView";
import PostMessage from "./components/PostMessage/PostMessage";
import EmptyState from "./components/EmptyState/EmptyState";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/SHUI" element={<MainView />} />
          <Route path="/SHUI/post" element={<PostMessage />} />
          <Route path="/SHUI/empty" element={<EmptyState />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
