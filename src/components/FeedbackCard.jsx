import React from 'react';

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col items-center justify-center px-10 py-12 rounded-[20px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-primary">
    {/* Image */}
    <img 
      src={img} 
      alt={name} 
      className="w-[240px] h-[240px] rounded-full object-cover mb-6" 
    />
    
    {/* Name and Title */}
    <h4 className="font-poppins font-semibold text-[22px] leading-[32px] text-white text-center">
      {name}
    </h4>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite text-center mb-6">
      {title}
    </p>
    
    {/* Feedback Content */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white text-center">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
