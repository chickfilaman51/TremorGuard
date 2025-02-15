import React from "react";

const Button = ({ styles }) => (
  <button 
    type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    onClick={() => window.location.href = 'https://youtu.be/Mh5CGTBQKAg'}
  >
    View the Demo
  </button>
);

export default Button;