import React, { useState } from "react";
import contact1 from "../../assets/contact1.png";
import SocialIcon from "../../components/ui/SocialIcon";
import Subtitle from "../../components/ui/Subtitle";
import Title from "../../components/ui/Title";
import Container from "../Container";

const ContactMe: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");
  const handleSubmit = () => {
    setUserName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessages("");
  };
  return (
    <Container className="border-b border-black">
      <div className="flex flex-col items-center">
        <Subtitle title="" />
        <Title title="Entre em contato conosco" />
      </div>
      <div className="flex gap-10 pt-10 ">
        <div className="w-1/3 bg-stone-950/50 p-10 rounded-lg group bg-slate-800">
          <div className="overflow-hidden rounded-lg ">
            <img
              src={contact1}
              alt="contact image"
              className="rounded-md group-hover:scale-110 duration-500"
            />
          </div>
          <div className="py-5 flex flex-col gap-2 text-white">
            <p className="text-2xl text-white font-bold">Entre em contato</p>
            <p className="text-lg font-medium">Fale com nosso jurídico</p>
            <p className="text-base font-medium">
              Se tem dúvidas sobre utilização, entre em contato conosco, iremos
              responder o mais rápido possível.
            </p>
            <p className="text-base">
              phone: <span className="text-white">+551198741XXXX</span>
            </p>
            <p className="text-base">
              Email: <span className="text-white">suitcase@gmail.com</span>
            </p>
            <p className="uppercase">Nossas redes</p>
          </div>
          <SocialIcon />
        </div>
        <div className="w-2/3 bg-stone-950/50 p-10 text-white rounded-lg flex flex-col gap-10 bg-slate-800">
          <div className="flex justify-between gap-7">
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Seu nome</p>
              <input
                type="text"
                placeholder=" Pedro Gonçalves"
                className="inputStyle"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <p className="text-sm uppercase">Telefone</p>
              <input
                type="text"
                placeholder=" (11) 123-456-789"
                className="inputStyle"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Email</p>
            <input
              type="email"
              placeholder=" emailcriativo@dominio.com"
              className="inputStyle"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Assunto</p>
            <input
              type="text"
              placeholder=" Assunto"
              className="inputStyle"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase">Sua mensagem</p>
            <textarea
              // type="text"
              placeholder=" Mande suas dúvidas aqui e algum super legal vai te responder.."
              className="inputStyle"
              cols={1}
              rows={3}
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="border-[1px] border-gray-500 py-2 rounded-md hover:border-designColor duration-300 uppercase hover:text-white"
          >
            Enviar Mensagem
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
