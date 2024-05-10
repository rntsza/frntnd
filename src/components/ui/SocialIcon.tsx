import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const SocialIcon: React.FC = () => {
  return (
    <div className="flex items-center gap-5">
      <a href="https://twitter.com/rntsza" target="_blank" rel="noopener noreferrer" className="portfolioIconStyle">
        <FaXTwitter />
      </a>
      <a href="https://github.com/rntsza" target="_blank" rel="noopener noreferrer" className="portfolioIconStyle">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/rntsouza" target="_blank" rel="noopener noreferrer" className="portfolioIconStyle">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcon;
