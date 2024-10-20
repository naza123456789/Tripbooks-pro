import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import MoreWaysToTripbooks from "./Components/MoreWaysToTripbooks/MoreWaysToTripbooks";
import CreateWithTripbooks from "./Components/CreateWithTripbooks/CreateWithTripbooks";
import Testimonials from "./Components/Testimonials/Testimonials";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import CreateModal from "./Components/CreateModal/CreateModal"; // Import the CreateModal component

const App = () => {
  // Data for hero section slides
  let heroData = [
    { text1: "Dive into", text2: "your passion" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Automatically change hero slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Router>
      <Navbar onCreateClick={toggleModal} /> {/* Pass the toggleModal function to Navbar */}
      <CreateModal isOpen={isModalOpen} onClose={toggleModal} /> {/* CreateModal Component */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
              <AboutUs /> {/* About Us section */}
              <MoreWaysToTripbooks /> {/* More Ways to Tripbooks section */}
              <CreateWithTripbooks /> {/* New CreateWithTripbooks section */}
              <Testimonials /> {/* Add Testimonials section */}
              <div style={{ margin: "80px 0", borderTop: "2px solid rgba(255, 255, 255, 0.2)" }} />
              <ContactUs /> {/* Add Contact Us section */}
            </>
          }
        />
        {/* Create Page Route */}
        <Route path="/create" element={<CreateModal isOpen={true} onClose={() => {}} />} />
      </Routes>
      <Footer /> {/* Footer available across all pages */}
    </Router>
  );
};

export default App;
