import React from "react";
import Container from "../Container";
import { Typewriter } from "react-simple-typewriter";
import Button from "../../components/ui/Button";

const Hero: React.FC = () => {
  const words = [
    "Assistente jurídico",
    "Facilitador",
    "Poupador de tempo",
    "E muito mais",
  ];

  return (
    <div className="w-full">
      <Container className="py-20">
        <div className="bg-hero-pattern2 bg-cover bg-no-repeat">
        <div className="w-1/2 flex flex-col gap-y-5   ">
          <p className="text-base uppercase">
            Seu assistente juridico
          </p>
          <h2 className="text-5xl font-bold text-white">
            Bem-vindo ao <span className="text-7xl text-designColor">SuitCase</span>
          </h2>
          <h2 className="text-4xl font-bold text-white">
            {" "}
            <Typewriter
              words={words}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-base pr-32 font-medium text-gray-400">
            O SuitCase é a sua solução jurídica completa e eficiente.<br/>
            Simplifique sua prática jurídica, economize tempo e
            forneça um serviço excepcional aos seus clientes com nossas ferramentas avançadas.
          </p>
          <Button className="w-40 h-14 border border-gray-500" title="Experimente Grátis" route={"/login"}/>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
