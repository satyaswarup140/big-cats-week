import React from "react";
import "../styles/WildlifeDestinations.css"; // Ensure this file exists

const destinations = [
  {
    name: "Corbett",
    image: "/images/corbett.png",
    description:
      "Named after the famed hunter-turned-conservationist, Sir Edward Jim Corbett...",
    link: "#",
  },
  {
    name: "Bandipur",
    image: "/images/bandipur.png",
    description:
      "This beautiful reserve is located in Karnataka and is part of the Nilgiri Biosphere Reserve...",
    link: "#",
  },
  {
    name: "Maasai Mara",
    image: "/images/Maasai-Mara.png",
    description:
      "A world-famous wildlife reserve in Kenya known for its Big Cats and Great Migration...",
    link: "#",
  },
  {
    name: "Andaman",
    image: "/images/andaman.png",
    description:
      "The Andaman Islands, located in the Bay of Bengal, are a tropical paradise...",
    link: "#",
  },
];

const WildlifeDestinations = () => {
  return (
    <div className="wildlife-container">
      <h2>Explore Wildlife Destinations</h2>
      <div className="wildlife-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="wildlife-card">
            <img src={destination.image} alt={destination.name} className="wildlife-image" />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <a href={destination.link} className="learn-more">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WildlifeDestinations;
