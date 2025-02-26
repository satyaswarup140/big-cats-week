import React, { useState } from "react";
import "../styles/testimonial.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    initials: "PR",
    name: "Preethi Ramani",
    review: "We had the trip of a lifetime in Kenya thanks to the Travel Unbounded team...",
    fullReview:
      "We had the trip of a lifetime in Kenya thanks to the Travel Unbounded team. The hotels & camps they selected for us were top notch and felt unique, intimate and not at all touristy. Their guides were great and gave us some amazing wildlife sightings. They were very patient and accommodating with young kids, elderly parents, and a large group with diverse needs.",
    rating: 5,
  },
  {
    initials: "SC",
    name: "Sourabh C",
    review: "Traveling to Africa and specifically Masai Mara was a bucket list trip for me and my family...",
    fullReview:
      "Traveling to Africa and specifically Masai Mara was a bucket list trip for me and my family (wife and teenage son) for many years. After years of procrastination, we finally managed to book the experience with help from Travel Unbounded and Chandrashekar planning the trip for us. It was a fantastic trip right from the careful planning for flight and stay!",
    rating: 5,
  },
  {
    initials: "AN",
    name: "Aishwarya Narasimhan",
    review: "To say that this tour was a breathtaking experience is nothing short of a criminal understatement...",
    fullReview:
      "To say that this tour was a breathtaking experience is nothing short of a criminal understatement that severely falls short of describing the true beauty of the Masai Mara Reserve. The memories that this place leaves behind are ones worth cherishing for a thousand lifetimes. Right from the lush plains of the savannah to the dazzling beauty of the countless animals, it's a journey like no other.",
    rating: 5,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setExpanded(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setExpanded(false);
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">What Our Clients Say</h2>
      <div className="testimonial-container">
        <button onClick={prevSlide} className="testimonial-arrow left">❮</button>
        <div className="testimonial-content">
          <p>{expanded ? testimonials[current].fullReview : testimonials[current].review}</p>
          <button className="view-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? "View Less" : "View More"}
          </button>
          <div className="testimonial-user">
            <div className="user-initials">{testimonials[current].initials}</div>
            <h4>{testimonials[current].name}</h4>
            <div className="stars">
              {[...Array(testimonials[current].rating)].map((_, index) => (
                <FaStar key={index} className="star" />
              ))}
            </div>
          </div>
        </div>
        <button onClick={nextSlide} className="testimonial-arrow right">❯</button>
      </div>
    </section>
  );
};

export default Testimonial;
