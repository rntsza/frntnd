import React from "react";
import Container from "../Container/index";
import logo from "../../assets/logoaaa.png";
import SocialIcon from "../../components/ui/SocialIcon";

const Footer: React.FC = () => {
  return (
    <div className="bg-primaryColor">
      <Container className="flex items-center justify-between py-5 rounded-md bg-[#101010] p-10">
        <img src={logo} alt="logo" className="w-16" />
        <p className="text-sm lowercase text-white hover:text-gray-600 duration-300 ">
          todos os direitos reservados para @rntsza
        </p>
        <SocialIcon />
      </Container>
    </div>
  );
};

export default Footer;
