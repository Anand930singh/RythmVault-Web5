import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if running on the client side
    if (typeof window !== "undefined") {
      // Access localStorage only on the client side
      const user = localStorage.getItem("user");
      setLoggedIn(user !== null); // Update the loggedIn state
    }
  }, []);
  return (
    <Router>
      <Navbar loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </Router>
  );
}
