import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp() {
  const handleClick = () => {
    window.open('https://wa.me/8209745951', '_blank');
  };

  return (
    <div
      className="fixed bottom-10 right-10 bg-green-500 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-green-600 transition duration-300"
      onClick={handleClick}
    >
      <FaWhatsapp size={30} />
    </div>
  );
}

export default Whatsapp;