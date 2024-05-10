import { Link } from "react-router-dom";
import logo from "../../assets/logoaaa.png";
import Button from "../../components/ui/Button";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigationArray = [
    { title: "Home", link: "/home" },
    { title: "Sobre nós", link: "/about" },
    { title: "Serviços", link: "/services" },
    { title: "Login", link: "/login" },
    { title: "Contato", link: "/contact" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <header className="w-full h-20 bg-[#16181C]/90 backdrop-blur-2xl  sticky top-0 z-50  border-cyan-800 rounded-lg">
      <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between bg-[#101010] rounded-lg p-10">
        <div>
          <Link to={"/"}>
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
          <Button className="w-28 h-10 uppercase" title="Cadastro" route={"/login"}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
