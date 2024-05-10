import React from "react";
import Container from "../Container";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import { featuresData } from "../../constant/data";
import FeatureCard from "../FeatureCard";

const Features: React.FC = () => {
  return (
    <>
      <Container className="border-b border-black flex flex-col gap-7">
        <Subtitle title="" />
        <Title title="O que eu posso fazer?" />
        <div className="grid grid-cols-3 gap-x-5 gap-y-7 text-white">
          {featuresData.map((item: { id: any }) => (
            <FeatureCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Features;
