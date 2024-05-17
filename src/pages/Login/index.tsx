import React, { useState } from "react";
// import SocialIcon from "../../components/ui/SocialIcon";
// import { Link } from "react-router-dom";
import api from "../../services/api";
// import { toastService } from "../../services/toastService";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [registerName, setRegisterName] = useState("");
  // const [registerAvatar, setRegisterAvatar] = useState("");

  const handleLogin = async () => {
    try {
      console.log(email, password);
      const response = await api.post("/sessions", {
        email,
        password,
      });
      // const data = response;
      console.log("retorno api", response);
      // if(!data) {
      //   throw new Error("teste error");

      // }
    } catch (error) {
      console.error("Error:");
      // toastService.error();
    }
  };

  const handleSignUp = async () => {
    try {
      console.log(email, password);
      // const response = await fetch("http://localhost:3000/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const LoginForm = () => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className="p-3 text-3xl font-bold text-green-700">SuitCase</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-green-400 border-solid"></div>
        <h3 className="text-xl font-semibold text-green-400 pt-2">Entrar!</h3>
        <div className="flex space-x-2 m-4 items-center justify-center"></div>
        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
            defaultValue={email}
            onBlur={(e) => setEmail(e.currentTarget.value)}
          ></input>
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Senha"
            defaultValue={password}
            onBlur={(e) => setPassword(e.currentTarget.value)}
          ></input>
          <button
            onClick={handleLogin}
            className="rounded-2xl m-2 text-white bg-green-400 w-2/5 px-4 py-2 shadow-md hover:text-green-400 hover:bg-white transition duration-200 ease-in"
          >
            Entrar
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-green-400 border-solid"></div>
        <p className="text-green-400 mt-4 text-sm">Não tem uma conta?</p>
        <p
          className="text-green-400 mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Criar uma Nova Conta?
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    return (
      <div className="bg-green-400 text-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in ">
        <h2 className="p-3 text-3xl font-bold text-white">SuitCase</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className="text-xl font-semibold text-white pt-2">Registre-se!</h3>
        <div className="flex space-x-2 m-4 items-center justify-center">
          {/* <SocialIcon /> */}
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <input
            type="string"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Nome"
          ></input>
          <input
            type="email"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
            // value={email}
            // onSubmit={(e) => setEmail(email)}
          ></input>
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Senha"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            onClick={handleSignUp}
            className="rounded-2xl m-4 text-green-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-green-400 transition duration-200 ease-in"
          >
            Cadastre-se
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className="text-white mt-4 text-sm">Já tem conta?</p>
        <p
          className="text-white mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Click aqui e acesse!
        </p>
      </div>
    );
  };

  return (
    // min-h-screen md:py-2
    <div className="bg-backgroung-test2 bg-cover bg-no-repeat flex flex-col items-center justify-center ">
      <main className="flex items-center h-[42rem] w-full px-2 md:px-20 ">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-white font-bold">SuitCase</p>
          <p className="font-medium text-lg leading-1 text-white">
            Explore nossas ferramentas, expanda seus negócios e economize.
          </p>
        </div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </main>
    </div>
  );
};

export default Login;
