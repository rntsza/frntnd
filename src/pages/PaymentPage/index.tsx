import React from "react";
import CardPlanos from "../../components/ui/CardPlanos";
import { useLocation } from "react-router-dom";

interface Feature {
  id: number;
  text: string;
}

interface PaymentPageState {
  title: string;
  description: string;
  price: string;
  period: string;
  features: Feature[];
  buttonText: string;
}

const PaymentPage: React.FC = () => {
  const location = useLocation();
  const {
    title = "Pro",
    description = "Acesso a todos os recursos.",
    price = "R$99",
    period = "por mês",
    features = [
      { id: 1, text: "Acesso ilimitado" },
      { id: 2, text: "Suporte 24/7" },
      { id: 3, text: "Relatórios avançados" },
    ],
    buttonText = "Assinar agora",
  } = location.state as PaymentPageState || {};
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex w-full min-h-screen rounded-lg shadow-lg">
        <div className="w-1/2 p-6 bg-gray-50 flex items-center justify-center">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Nome Completo</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Seu nome completo"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Seu email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Número do Cartão</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Número do cartão"
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Validade</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  placeholder="MM/AA"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">CVV</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Endereço</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Logradouro"
              />
              <label className="block text-gray-700">Cep</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="01234-567"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 rounded mt-4"
            >
              Pagar
            </button>
          </form>
        </div>
        <div className="w-1/2 p-6 bg-backgroung-test2 bg-cover bg-no-repea flex items-center justify-center">
          <CardPlanos
            className="shadow-none"
            title={title}
            description={description}
            price={price}
            period={period}
            features={features}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
