import { motion } from "framer-motion";
import { EmailSVG, LocationSVG } from "../../../assets/customSvg";
import { t } from "i18next";
import { useState } from "react";
import { Spinner } from "../../../utils/spinner";
import { toast } from "react-toastify";
import { websiteService } from "../../../services/website.service";

interface IError {
  status: boolean;
  text: string;
}

export const Help: React.FC<any> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [emailError, setEmailError] = useState<IError>({
    status: false,
    text: "",
  });
  const [phoneError, setPhoneError] = useState<IError>({
    status: false,
    text: "",
  });
  const [messageError, setMessageError] = useState<IError>({
    status: false,
    text: "",
  });
  const [nameError, setNameError] = useState<IError>({
    status: false,
    text: "",
  });

  const sendMessageToPayqin = async () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+\d{10,}$/;
    const fullNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)?$/;

    if (fullName === "") {
      setNameError({
        status: true,
        text: "Le nom est obligatoire",
      });

      return;
    }

    if (!fullNameRegex.test(fullName)) {
      setNameError({
        status: true,
        text: "Le nom ne doit pas contenir de chiffres ou de caractères speciaux",
      });

      return;
    }

    if (email === "") {
      setEmailError({ status: true, text: "L'adresse email est obligatoire" });
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError({
        status: true,
        text: "L'adresse email n'est pas correcte",
      });
      return;
    }

    if (phoneNumber === "") {
      setPhoneError({
        status: true,
        text: "Le numéro de téléphone est obligatoire",
      });
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError({
        status: true,
        text: "Le numéro de téléphone est incorrecte",
      });
      return;
    }

    if (message === "") {
      setMessageError({ status: true, text: "Le message est obligatoire" });
      return;
    }

    if (message.length < 30) {
      setMessageError({
        status: true,
        text: "Le corps du message est trop court , le nombre de caracteres mininum est 30",
      });
      return;
    }

    setIsLoading(true);

    setTimeout(async () => {
      const { data } = await websiteService.sendMessageToPayQinSupport(
        email,
        message,
        fullName,
        phoneNumber
      );
      setIsLoading(false);

      toast.success(data.message);
    }, 5000);
  };
  return (
    <section className="md:mb-20 md:mt-20 w-full h-auto rounded-3xl p-4 md:p-10 xl:px-32 block lg:grid lg:grid-cols-2 bg-gradient-to-tr from-payqinGradientBL to-payqinGradientTR">
      <div>
        <h1 className="text-lg md:text-4xl xl:text-5xl font-bold">
          {t("index.needHelp")}
        </h1>
        <ul>
          <li className="flex gap-x-4 lg:gap-x-6 xl:gap-x-10 my-4 lg:my-10">
            <LocationSVG size="40" color="black" />
            <div className="block">
              <p className="text-xs md:text-base text-payqinGrayText my-1">
                {t("index.headquarters")}
              </p>
              <p className="font-medium text-sm md:text-xl">
              2261 Market Street
              </p>
              <p className="font-medium text-sm md:text-xl">#10331</p>
              <p className="font-medium text-sm md:text-xl">San Francisco, CA 94114</p>
            </div>
          </li>
          <li className="flex gap-x-4 lg:gap-x-6 xl:gap-x-10  mb-4 lg:md-0">
            <EmailSVG size="40" color="black" />
            <div className="block">
              <p className="text-xs md:text-base text-payqinGrayText my-1">
                Support email
              </p>
              <p className="font-medium text-sm md:text-xl">hello@payqin.com</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="h-auto w-full bg-white rounded-xl px-2 md:px-10 pb-6 md:mt-10 lg:mt-0">
        <form action="">
          <div className="relative z-0 w-full md:mb-10 mb-4">
            <label className="font-normal text-sm md:text-base text-gray-500 bg-white relative px-1 top-2 left-3 w-auto">
              {t("index.yourName")}
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              type="text"
              name="money_sent"
              id="money_sent"
              className="h-10 md:h-14 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 text-sm md:text-base"
            />
            {nameError.status && nameError.text && (
              <p className="text-red-400 text-xs mt-2">{nameError.text}</p>
            )}
          </div>
          <div className="relative z-0 w-full md:mb-10 mb-4">
            <label className="font-normal text-sm md:text-base text-gray-500 bg-white relative px-1 top-2 left-3 w-auto">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@email.com"
              type="text"
              name="money_received"
              id="money_received"
              className="h-10 md:h-14 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 text-sm md:text-base"
            />
            {emailError.status && emailError.text && (
              <p className="text-red-400 text-xs mt-2">{emailError.text}</p>
            )}
          </div>
          <div className="relative z-0 w-full md:mb-10 mb-4">
            <label className="font-normal text-sm md:text-base text-gray-500 bg-white relative px-1 top-2 left-3 w-auto">
              {t("index.phoneNumber")}
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+2250700000000"
              type="text"
              name="money_received"
              id="money_received"
              className="h-10 md:h-14 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 text-sm md:text-base"
            />
            {phoneError.status && phoneError.text && (
              <p className="text-red-400 text-xs mt-2">{phoneError.text}</p>
            )}
          </div>
          <div className="relative z-0 w-full md:mb-10 mb-2">
            <label className="font-normal text-xs md:text-base text-gray-500 bg-white relative px-1 top-2 left-3 w-auto">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre message ici ..."
              name="money_received"
              id="money_received"
              className="h-24 md:h-30 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 text-sm md:text-base"
            />
            {messageError.status && messageError.text && (
              <p className="text-red-400 text-xs mt-2">{messageError.text}</p>
            )}
          </div>
          {isLoading ? (
            <div className="flex justify-center w-full">
              <Spinner color="black" />
            </div>
          ) : (
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                sendMessageToPayqin();
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className={`h-auto w-full  p-4 bg-payqinBlue text-white rounded-full px-3 md:px-6 py-3 text-center text-xs md:text-sm mt-4 xl:mt-3`}
            >
              {t("index.talk")}
            </motion.button>
          )}
        </form>
      </div>
    </section>
  );
};
