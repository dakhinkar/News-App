import React from "react";

function ContactUs() {
  return (
    <div style={{ textAlign: "center", minHeight: "78vh" }}>
      <h1 className="display-4">Contact Us</h1>
      <h6 className="display-6">Address: </h6>
      <pre>
        Indian news Channel, 
        Near Bandra railway station, 
        Bandra, Mumbai 
        Pin code: 400017
      </pre>
      <h6 className="display-6">Phone: </h6>
      <p className="lead">+91 8080682536</p>
      <h6 className="display-6">Email: </h6>
      <p className="lead">indiannews@gmail.com</p>
    </div>
  );
}

export default ContactUs;
