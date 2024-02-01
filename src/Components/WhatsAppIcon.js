import React from 'react';

const WhatsAppIcon = ({ phoneNumber, message, iconSrc }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={iconSrc} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppIcon;
