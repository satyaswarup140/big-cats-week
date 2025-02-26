import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import WildlifeDestinations from "../components/WildlifeDestinations"; // Import WildlifeDestinations
import "../styles/Home.css"; // Adjust path if needed

const Home = () => {
  const images = [
    "/images/images1.png",
    "/images/images2.png",
    "/images/images3.png",
    "/images/images4.png",
    "/images/images5.png",
    "/images/images6.png",
    "/images/images7.png",
    "/images/images8.png"
  ]; // Ensure images exist in the public/images folder

  return (
    <div className="home-container">
      {/* Image Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="home-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="home-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Title & Description */}
      <h1>Welcome to Big Cats Week</h1>
      <p>Experience the thrill of wildlife adventures in the most iconic destinations.</p>

      {/* Wildlife Destinations Section */}
      <WildlifeDestinations />
    </div>
  );
};

export default Home;
