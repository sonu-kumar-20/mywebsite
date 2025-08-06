import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Skills.css'; // Optional for styling

const WhatsAppButton = () => {
  return (
<a
  href="https://wa.me/9534204141?text=Hey%20there!%20WhatsApp%20me%20for%20help."
  className="whatsapp-float-with-text"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp size={24} />
  <span>Whatsapp Your Query</span>
</a>

  );
};

export default WhatsAppButton;
