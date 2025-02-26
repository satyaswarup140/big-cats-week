import React from "react";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.text}>
        Feel free to reach out to us. We'd love to hear from you!
      </p>
      <div style={styles.info}>
        <p><strong>Email:</strong> support@travelunbounded.com</p>
        <p><strong>Phone:</strong> +91 9141001434</p>
        <p><strong>Address:</strong> 39/2475-B1, Suite 80, LR Towers, Kochi, Kerala</p>
      </div>
    </div>
  );
};

// Inline CSS for quick styling (optional)
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f8f9fa",
  },
  heading: {
    fontSize: "28px",
    color: "#333",
  },
  text: {
    fontSize: "18px",
    color: "#555",
  },
  info: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#666",
  },
};

export default ContactUs;
