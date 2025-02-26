import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Destinations from "./pages/Destinations";
import LeisurePackages from "./pages/LeisurePackages";
import WildlifePackages from "./pages/WildlifePackages";
import Blogs from "./pages/Blogs";

const App = () => {
  const [showContact, setShowContact] = useState(false); // Control contact info

  return (
    <Router>
      <Navbar setShowContact={setShowContact} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/leisure-packages" element={<LeisurePackages />} />
        <Route path="/wildlife-packages" element={<WildlifePackages />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      {/* Add Testimonial Section Here */}
      <Testimonial />

      <Footer showContact={showContact} />
    </Router>
  );
};

export default App;
