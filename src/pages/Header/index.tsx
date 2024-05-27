import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { useLocation } from "react-router-dom";
import ProfileMenu from "../../components/ui/ProfileMenu";
import tempProfile from "../../assets/d1.png";

interface HeaderProps {
  openAuthModal: () => void;
}


const Header: React.FC<HeaderProps> = ({ openAuthModal }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigationArray = [
    { title: "Home", link: "/home" },
    { title: "Serviços", link: "/dashboard" },
    { title: "Acompanhamento", link: "/" },
    { title: "Contato", link: "/" },
  ];
  const tempProfileImage = tempProfile;


  return (
    <header className="w-full h-20 bg-[#16181C]/90 backdrop-blur-2xl  sticky top-0 z-50 rounded-lg">
      <div className="h-full flex items-center justify-between rounded-lg p-10">
        <div>
          <Link to={"/home"}>
            <img src={logo} alt="logo" className="w-16" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {navigationArray.map(({ title, link }) => (
            <Link key={link} to={link}>
              <p
                className={`${
                  pathname === link ? "text-green-700" : "text-white"
                } text-sm uppercase font-normal hover:text-emerald-700 cursor-pointer duration-300 text-gray-300 `}
              >
                {title}
              </p>
            </Link>
          ))}
          {/* {!isLoggedIn && (
            <button
              className="w-28 h-10 uppercase"
              // title="Login"
              onClick={handleLoginClick}
            >
              Login
            </button>
          )} */}
          {/* <button className={`${
                  !isLoggedIn ? "text-green-700" : "text-white"
                } text-sm uppercase font-normal hover:text-emerald-700 cursor-pointer duration-300 text-gray-300 `} onClick={handleOpenAuthModal}>
            Login
          </button> */}
          <button className="text-sm uppercase font-normal hover:text-emerald-700 cursor-pointer duration-300 text-gray-300 " onClick={openAuthModal}>
            Login
          </button>
          {/* <ProfileMenu profilePicture={user.profilePicture} /> */}
          {/* <ProfileMenu profilePicture={tempProfileImage} onLogout={handleLogout}/> */}
          <ProfileMenu profilePicture={tempProfileImage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
