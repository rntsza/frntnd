import React from "react";
import { useNavigate } from "react-router-dom";

interface CardPlanosProps {
  className?: string;
  title: string;
  description: string;
  price: string;
  period: string;
  features: { id: number; text: string }[];
  buttonText: string;
}

const CardPlanos: React.FC<CardPlanosProps> = ({
  className = "",
  title,
  description,
  price,
  period,
  features,
  buttonText,
}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/payment', {
      state: {
        title,
        description,
        price,
        period,
        features,
        buttonText,
      },
    });
  };

  return (
    <div className="flex justify-center p-4 mt-2">
      <div className={`w-72 h-119 flex flex-col p-6 backdrop-blur-md bg-black bg-opacity-25 ${className}`}>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="font-light sm:text-sm text-white">
          {description}
        </p>
        <div className="flex items-baseline my-4">
          <span className="mr-2 text-5xl font-medium text-white">{price}</span>
          <span className="text-white">{period}</span>
        </div>
        <hr className="border-gray-200 my-2" />
        <div className="flex-grow overflow-y-hidden mb-4">
          <ul role="list" className="space-y-4 text-left ">
            {features?.map((feature) => (
              <li key={feature.id} className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className='text-white'>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
        <button
            onClick={handleClick}
            className="text-white font-semibold text-sm py-2.5 text-center bg-[#1F1F1F] p-10 rounded-3xl"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPlanos;
