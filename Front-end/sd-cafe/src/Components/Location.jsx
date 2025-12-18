import React from "react";

const LocationContact = () => {
    return (
        <section className="location-contact" id="contact">
            <h2>Visit SD Cafe ☕</h2>

            <div className="location-grid">
                {/* Map */}
                <div className="map-box">
                    <iframe
                        title="SD Cafe Location"
                        src="https://www.google.com/maps?q=26.854794521671153,75.73961867176176&z=18&output=embed"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>


                {/* Info */}
                <div className="contact-info">
                    <p className="p"><strong>📍 Address:</strong> Mangyawas Road , Near Chopra Marriage Garden Jaipur !</p>
                    <p className="p"><strong>📞 Phone:</strong> +91 8955770391</p>
                    <p className="p"><strong>⏰ Opening Hours:</strong></p>

                    <ul>
                        <li>Mon – Fri: 10:00 AM – 10:00 PM</li>
                        <li>Sat – Sun: 9:00 AM – 11:00 PM</li>
                    </ul>

                    <a
                        href="https://wa.me/918955770391"
                        target="_blank"
                        rel="noreferrer"
                        className="whatsapp-btn"
                    >
                        💬 Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LocationContact;
