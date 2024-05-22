import { Link } from "react-router-dom";

interface CardProps {
  key: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, linkText, link }) => {
  return (
    <div className="w-64 h-40 bg-gray-800 rounded-lg p-4 flex flex-col justify-between text-white">
      <div>
        <h3 className="text-xl font-semibold truncate">{title}</h3>
        <p className="text-sm mt-2 line-clamp-3">{description}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span>0/30</span>
        <Link to={link} className="text-blue-400 hover:text-blue-600">
          {linkText} <span>&#8594;</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
