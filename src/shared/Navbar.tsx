import { useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { CustomLang } from "../assets/customLangFlag";
import {
  englandFlag,
  expandDownImg,
  expandUpImg,
  frenchFlag,
  menuBarLogo,
  payqinLogo,
} from "../constants/appConstants";

const BasicLink = ({
  path,
  toRoute,
  name,
  options,
}: {
  path: string;
  name: string;
  toRoute?: string;
  options?: any;
}) => {
  const { i18n } = useTranslation("common");
  let lang = "fr";

  const [expandNav, setExpandNav] = useState<boolean>(false);

  const handleChangelanguage = () => {
    if (options === true) {
      if (i18n.language === "fr") {
        localStorage.setItem("language", "en");
        lang = "en";
      } else {
        localStorage.setItem("language", "fr");
        lang = "fr";
      }

      i18n.changeLanguage(lang).then(() => window.location.reload());
    }

    return null;
  };

  return (
    <>
      {!options ? (
        <motion.li className="h-auto">
          <a href={toRoute} className="relative cursor-pointer">
            {path === toRoute && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[1px] w-full bg-black"
              />
            )}
            <p>{name}</p>
          </a>
        </motion.li>
      ) : (
        <>
          <div
            className="flex gap-x-2 items-center justify-center cursor-pointer relative"
            onClick={() => setExpandNav(!expandNav)}
            style={{padding:10, backgroundColor:"rgba(255,0,0,0.25)", borderRadius: 5}}
          >
            <CustomLang lang={name} />
            {expandNav ? (
              <img src={expandUpImg} alt="expand_up" className="h-4 w-4" style={{borderRadius: 5}} />
            ) : (
              <img src={expandDownImg} alt="expand_down" className="h-4 w-4" style={{borderRadius: 5}} />
            )}
          </div>
          {expandNav && (
            <div className="py-5 w-32 bg-white absolute border-2 top-[5rem] lg:right-[12rem] 2xl:right-[17rem] block">
              {name === "FR" ? (
                <div
                  className="flex justify-center bg-white gap-x-3 items-center cursor-pointer"
                  onClick={handleChangelanguage}
                >
                  <img
                    src={englandFlag}
                    alt="country_flag"
                    className="h-6 w-7"
                    style={{borderRadius: 50}}
                  />{" "}
                  <span>{"EN"}</span>
                </div>
              ) : (
                <div
                  className="flex justify-center bg-white gap-x-3 items-center cursor-pointer"
                  onClick={handleChangelanguage}
                >
                  <img
                    src={frenchFlag}
                    alt="country_flag"
                    className="h-6 w-7"
                    style={{borderRadius: 50}}
                  />{" "}
                  <span>{"FR"}</span>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export const Navbar = ({ }) => {
  const [expandNav, setExpandNav] = useState(false);
  const [scope, animate] = useAnimate();
  const currentUrl = window.location.pathname;

  let lang = "fr";

  const { i18n } = useTranslation("common");

  const currentLang = i18n.language.toUpperCase();

  const toggleMenu = () => {
    setExpandNav(!expandNav);

    animate(".ul-nav", { opacity: [0, 1] }, { duration: 0.5 });
    animate(
      ".nav-item",
      {
        x: [1000, 0],
        scale: 1,
      },
      {
        duration: 0.7,
        delay: stagger(0.1, { startDelay: 0.15 }),
      }
    );
  };

  const goToWebApp = () => {
    window.location.href = "https://web.payqin.com";
  };

  const handleChangelanguage = () => {
    if (i18n.language === "fr") {
      localStorage.setItem("language", "en");
      lang = "en";
    } else {
      localStorage.setItem("language", "fr");
      lang = "fr";
    }

    i18n.changeLanguage(lang).then(() => window.location.reload());

    return null;
  };

  const links = [
    { href: "/", name: t("navbar.home") },
    { href: "/pricing", name: t("navbar.pricing") },
    { href: "https://blog.payqin.com", name: "Blog" },
    { href: "https://blog.payqin.com", name: t("navbar.testimonials") },
    { href: "https://policies.payqin.com", name: t("navbar.terms_conditions") },
    {
      name: currentLang,
      options: true,
    },
  ];

  return (
    <>
      <nav
        className="w-full bg-white font-light sticky top-0 z-10 shadow-md lg:shadow-sm py-2"
        ref={scope}
      >
        <div className="container mx-auto p-2 lg:p-4 h-full">
          <div className="flex justify-between items-center h-full">
            <>
              <a href="/">
                <img src={payqinLogo} alt="payqin_logo" className="max-h-6" />
              </a>
            </>

            <ul className="hidden lg:flex lg:gap-x-6 xl:gap-x-10 lg:items-center">
              {links.map((link, index) => (
                <BasicLink
                  path={currentUrl}
                  key={index}
                  toRoute={link.href}
                  name={link.name}
                  options={link.options}
                />
              ))}
              <li>
                <motion.button
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex text-white px-3 md:px-6 py-3 bg-payqinBlue text-center text-xs md:text-sm rounded-full"
                  onClick={goToWebApp}
                >
                  {t("index.openAccount")}
                </motion.button>
              </li>
            </ul>
            {/* Hamburger Menu */}
            <>
              <ul className="lg:hidden">
                <li className="flex gap-x-2">
                  <button
                    className="hidden md:flex text-white px-3 md:px-6 py-3 bg-payqinBlue text-center text-xs md:text-sm rounded-full"
                    onClick={goToWebApp}
                  >
                    {t("index.openAccount")}
                  </button>

                  <button type="button" onClick={toggleMenu}>
                    <img
                      src={menuBarLogo}
                      alt="menu_button"
                      className="max-h-8 md:max-h-10"
                    />
                  </button>
                </li>
              </ul>
            </>
          </div>
          <nav
            className={`${expandNav ? "block" : "hidden"
              } bg-payqinBlue bg-opacity-10 h-auto pt-4 w-full`}
          >
            <ul className="ul-nav flex flex-col">
              {links.map((link, index) => (
                <div key={index} className="nav-item">
                  {link.options ? (
                    <>
                      <li>
                        <a
                          href={link.href}
                          onClick={() => {
                            if (link.options) {
                              handleChangelanguage();
                            }
                          }}
                          
                        >
                          {link.name === "FR" ? (
                            <div className="flex gap-x-3 items-center cursor-pointer" style={{padding:10, backgroundColor:"rgba(255,0,0,0.25)"}}>
                              <img
                                src={englandFlag}
                                alt="country_flag"
                                className="h-6 w-10"
                              />{" "}
                              <span>{"EN"}</span>
                            </div>
                          ) : (
                            <div className="flex gap-x-3 items-center cursor-pointer" style={{padding:10, backgroundColor:"rgba(255,0,0,0.25)"}}>
                              <img
                                src={frenchFlag}
                                alt="country_flag"
                                className="h-6 w-10"
                              />{" "}
                              <span>{"FR"}</span>
                            </div>
                          )}
                        </a>
                      </li>
                    </>
                  ) : (
                    <li className="py-1">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  )}
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};
