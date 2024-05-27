import React, { useState } from "react";
import { XIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import api from "../../services/api";
import { toastService } from "../../services/toastService";
import { useNavigate } from "react-router-dom";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isRegister?: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await api.post("/sessions", {
        email,
        password,
      });
      localStorage.setItem("token", response.data?.token);
      toastService.success(`Bem-vindo ${response.data?.advogado?.nome} 🥳`);
      onClose();
      navigate("/dashboard");
    } catch (error: any) {
      toastService.error(`${error.response.data.error}`);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await api.post("/advogados", {
        name: name,
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      toastService.success(`Bem-vindo ${response.data.nome} 🥳`);
      onClose();
      navigate("/dashboard");
    } catch (error: any) {
      toastService.error(`${error.response.data.error}`);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg z-10 relative">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-center items-center mb-4">
              <div className="text-4xl font-extrabold ">SuitCase</div>
            </div>

            {!isLogin && (
              <div>
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
            )}

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-2">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Senha
                </label>
                <button className="text-[10px] text-blue-500">
                  Esqueceu a senha?
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-6 w-6 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-6 w-6 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="mb-4">
                <button
                  onClick={() => {
                    handleLogin();
                  }}
                  className="block w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                  Login
                </button>
              </div>
            )}
            {isLogin && (
              <div className="flex justify-center">
                <button
                  className="block w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  onClick={() => setIsLogin(false)}
                >
                  Criar uma Conta
                </button>
              </div>
            )}
            {!isLogin && (
              <div className="flex justify-center">
                <button
                  className="block w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  onClick={() => handleSignUp()}
                >
                  Criar uma Conta
                </button>
              </div>
            )}
            {!isLogin && (
              <button
                className="block w-full bg-blue-500 text-white mt-3 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => setIsLogin(true)}
              >
                Já tenho conta
              </button>
            )}
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
