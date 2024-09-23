import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Item = ({
  img,
  title,
  text,
}: {
  img: string;
  title: string;
  text: string;
}) => {
  const { ref: myRef, inView: isVisible } = useInView({
    threshold: 0,
  });

  const controls = useAnimation();

  const parentVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 1,
        staggerChildren: 0.7,
      },
    },
  };

  const childVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    hover: {
      x: 50,
    },
  };

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isVisible]);

  return (
    <motion.li
      className="cursor-pointer"
      variants={parentVariants}
      initial="hidden"
      animate={controls}
      whileHover={childVariants.hover}
      ref={myRef}
    >
      <motion.div
        className="flex gap-x-5 my-10 items-center"
        variants={childVariants}
        animate={controls}
        initial="hidden"
      >
        <>
          <img src={`${img}`} alt="Icon_Instant_Transactions" />
        </>
        <div>
          <h3 className="font-medium md:font-bold text-base md:text-xl">
            {title}
          </h3>
          <p className="text-payqinGrayText mt-1 font-light md:font-normal text-xs md:text-sm">
            {text}
          </p>
        </div>
      </motion.div>
    </motion.li>
  );
};
