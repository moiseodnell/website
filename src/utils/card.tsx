import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Card = ({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: string;
}) => {
  const { ref: myRef, inView: isVisible } = useInView({
    threshold: 0,
  });

  const controls = useAnimation();

  const imgVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.4,
        delay: 0.3,
      },
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
    <div
      className="bg-white flex justify-center gap-x-4 h-[11rem] lg:block lg:h-[25rem] lg:w-[40rem] xl:h-[35rem] xl:w-[30rem] rounded-xl p-4 border border-black-1 overflow-hidden mb-10 cursor-pointer"
      ref={myRef}
    >
      <motion.div variants={textVariants} animate={controls} initial="hidden">
        <h2 className="text-lg md:text-3xl font-bold">{title}</h2>
        <p className="text-payqinGrayText font-normal text-xs md:text-sm mt-3">
          {text}
        </p>
      </motion.div>
      <div>
        <motion.img
          variants={imgVariants}
          initial={"hidden"}
          animate={controls}
          src={`${img}`}
          alt="virtual_card_img"
          className="lg:mt-8"
        />
      </div>
    </div>
  );
};
