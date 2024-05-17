import React from "react";
// import Title from "../../components/ui/Title";
// import Subtitle from "../../components/ui/Subtitle";
import CardPlanos from "../../components/ui/CardPlanos";

const PlansPage: React.FC = () => {
  return (
    <section className="bg-backgroung-test2 bg-cover bg-no-repeat flex flex-col items-center justify-center ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mb-10">
          <h2 className="font-semibold text-6xl text-white">
            Planos de assinatura
          </h2>
          <p className="font-normal text-2xl text-white">
            Solicite a assinatura que mais encaixa com o seu perfil
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-4 space-y-2">
          <CardPlanos
            title="Gratuito"
            description=""
            price="R$ 0"
            period="/mês"
            features={[
              { id: 1, text: "5 Redações de Peças" },
              { id: 2, text: "10 Perguntas no Chat" },
              { id: 3, text: "5 Análise de Documentos" },
              { id: 4, text: "Cadastro de Clientes" },
              { id: 5, text: "Cadastro de Iniciais" },
            ]}
            buttonText="Escolher"
          />
          <CardPlanos
            title="Básico"
            description=""
            price="R$ 49"
            period="/mês"
            features={[
              { id: 1, text: "15 Redações de Peças" },
              { id: 2, text: "30 Perguntas no Chat" },
              { id: 3, text: "15 Análise de Documentos" },
              { id: 4, text: "Peças iniciais" },
              { id: 5, text: "+ Benefícios do plano Grátis" },
            ]}
            buttonText="Escolher"
          />
          <CardPlanos
            title="Intermediário"
            description=""
            price="R$ 75"
            period="/mês"
            features={[
              { id: 1, text: "30 Redações de Peças" },
              { id: 2, text: "60 Perguntas no Chat" },
              { id: 3, text: "30 Análise de Documentos" },
              { id: 4, text: "Parecer Jurídico" },
              { id: 5, text: "+ Benefícios do plano Básico" },
            ]}
            buttonText="Escolher"
          />
          <CardPlanos
            title="Pro"
            description=""
            price="R$ 99"
            period="/mês"
            features={[
              { id: 1, text: "60 Redações de Peças" },
              { id: 2, text: "120 Perguntas no Chat" },
              { id: 3, text: "60 Análise de Documentos" },
              { id: 4, text: "Suporte prioritário" },
              { id: 5, text: "+ Benefícios do plano Intermediário" },
            ]}
            buttonText="Escolher"
          />
        </div>
        <p className="font-extralight text-2xl text-center justify-center text-white">
          Não encontrou uma que se adeque ao seu perfil?{" "}
          <b>Entre em contato conosco</b>
        </p>
      </div>
    </section>
  );
};

export default PlansPage;
