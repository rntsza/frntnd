import { Link } from "react-router-dom";
import React from 'react';

interface CardProps {
  key: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, linkText, link }) => {
  return (
    <div className="w-64 h-[12rem] bg-secondary rounded-lg p-4 flex flex-col justify-between text-white">
      <div>
        <h3 className="text-3xl font-normal ">{title}</h3>
        <p className="text-[10px] mt-2 line-clamp-3">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className='text-[10px]'>0/30</span>
        <Link to={link} className="text-sm text-blue-400 hover:text-blue-600">
          {linkText} <span>&#8594;</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
