import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [registerName, setRegisterName] = useState("");
  // const [registerAvatar, setRegisterAvatar] = useState("");

  const LoginForm = () => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className="p-3 text-3xl font-bold text-green-700">SuitCase</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-green-400 border-solid"></div>
        <h3 className="text-xl font-semibold text-green-400 pt-2">Entrar!</h3>
        <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="socialIcon">{/* <Facebook/> */}</div>
          <div className="socialIcon">{/* <GitHub/> */}</div>
          <div className="socialIcon">{/* <Google/> */}</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Senha"
          ></input>
          <button className="rounded-2xl m-2 text-white bg-green-400 w-2/5 px-4 py-2 shadow-md hover:text-green-400 hover:bg-white transition duration-200 ease-in">
            Sign In
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
      <div className="bg-green-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <h2 className="p-3 text-3xl font-bold text-white">SuitCase</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className="text-xl font-semibold text-white pt-2">
          Registre-se!
        </h3>
        <div className="flex space-x-2 m-4 items-center justify-center">
          <div className="socialIcon border-white">
            {/* <Facebook className="text-white"/> */}
          </div>
          <div className="socialIcon border-white">
            {/* <GitHub className="text-white"/> */}
          </div>
          <div className="socialIcon border-white">
            {/* <Google className="text-white"/> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Nome"
          ></input>
          <input
            type="email"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Senha"
          ></input>
          <button className="rounded-2xl m-4 text-green-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-green-400 transition duration-200 ease-in">
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
    <div className="bg-backgroung-test2 bg-cover bg-no-repeat flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
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
