import { useState } from "react";
import { Link } from "react-router-dom";

interface ProfileMenuProps {
  profilePicture: string;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ profilePicture }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2">
          <Link to="/profile" className="block px-4 py-2 text-white hover:text-gray-800 hover:bg-gray-200">
            Perfil
          </Link>
          <Link to="/settings" className="block px-4 py-2 text-white hover:text-gray-800 hover:bg-gray-200">
            Configurações
          </Link>
          <Link to="/subscriptions" className="block px-4 py-2 text-white hover:text-gray-800 hover:bg-gray-200">
            Assinaturas
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
