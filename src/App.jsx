import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import MainPage from "./Components/MainPage";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollProgress from "./Components/ScrollProgress";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import PageLoader from "./Components/PageLoader";
import { SiteDataProvider } from "./context/SiteDataContext";
import { ContactProvider } from "./Components/ContactLogic";
import ProjectShowcase from "./Components/ProjectShowcase";

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isLoading ? (
    <PageLoader />
  ) : (
    <>
      <ScrollProgress />
      <ScrollToTopButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<ProjectShowcase/>} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 150,
    });
  }, []);

  return (
    <SiteDataProvider>
      <ContactProvider>
        <Router>
          <AppContent />
        </Router>
      </ContactProvider>
    </SiteDataProvider>
  );
}

export default App;
