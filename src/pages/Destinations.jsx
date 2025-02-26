import React from "react";
import WildlifeDestinations from "../components/WildlifeDestinations"; // Ensure correct path

const Destinations = () => {
  return (
    <div className="page">
      <h1>Maasai Mara - A Wildlife Paradise</h1>
      <p>
        November is one of the best times to visit Kenya, especially its prime
        park, Maasai Mara. During this period, the large migratory herds have
        returned to Tanzania, making the Big Cats venture long distances in
        search of prey.
      </p>
      <p>
        The Maasai Mara National Reserve is renowned for its breathtaking
        landscapes, dramatic skies, and lush greenery. It offers an unparalleled
        safari experience where you can witness lions, cheetahs, elephants,
        zebras, and rhinos in their natural habitat.
      </p>
      <p>
        Join us this Diwali season for a unique adventure in one of the world’s
        most celebrated wildlife reserves.
      </p>

      {/* Add Wildlife Destinations component here */}
      <WildlifeDestinations />
    </div>
  );
};

export default Destinations;
