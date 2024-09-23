import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { t } from "i18next";
import {
  appleStoreLogo,
  googlePLayLogo,
  twoPhonesIllustration,
} from "../../../constants/appConstants";

export const UserTurn: React.FC<any> = ({}) => {
  const { ref: myRef, inView: isVisible } = useInView({
    threshold: 0,
  });

  const controls = useAnimation();

  const imgVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const goToStores = () => {
    window.location.href =
      "https://get-payqin.ew.r.appspot.com/api/merchant/redirection";
  };

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [controls, isVisible]);

  return (
    <section
      className="bg-gradient-to-br w-full h-auto lg:mt-32 xl:mt-56 lg:h-[31rem] from-payqinUserGradiantRight to-payqinUserGradiantLeft lg:grid lg:grid-cols-2 rounded-xl"
      ref={myRef}
    >
      <div className="block px-4 py-4 lg:py-0 md:px-10 mt-4 lg:mt-10 xl:mt-32">
        <h1 className="font-bold text-xl md:text-4xl lg:text-5xl text-center lg:text-start">
          {t("index.userturn")}
        </h1>
        <p className="text-xs my-10 text-center md:text-base lg:text-start">
          {t("index.userturnSub")}
        </p>
        <div className="flex justify-center lg:justify-normal gap-x-6">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            type="button"
            onClick={goToStores}
          >
            <img
              src={appleStoreLogo}
              alt="apple_store_button"
              className="h-10 md:h-12"
            />
          </motion.button>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            type="button"
            onClick={goToStores}
          >
            <img
              src={googlePLayLogo}
              alt="google_store_button"
              className="h-10 md:h-12"
            />
          </motion.button>
        </div>
      </div>
      <div>
        <motion.img
          src={twoPhonesIllustration}
          alt="two phones with the application"
          className="hidden lg:block relative xl:top-[-10.75rem] xl:right-[-0.25rem]"
          variants={imgVariants}
          animate={controls}
          initial="hidden"
        />
      </div>
    </section>
  );
};
