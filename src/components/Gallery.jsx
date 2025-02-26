import React from "react";
import "../styles/gallery.css";

const Gallery = () => {
  const images = [
    "/assets/images/image1.jpg",
    "/assets/images/image2.jpg",
    "/assets/images/image3.jpg",
    "/assets/images/image4.jpg"
  ];

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gallery ${index + 1}`} className="gallery-img" />
      ))}
    </div>
  );
};

export default Gallery;
