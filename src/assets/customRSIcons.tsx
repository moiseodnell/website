import { motion } from "framer-motion";

interface ICustomRSIcon {
  imgUrl: string;
  alt: string;
  urlTo: string;
}

export const CustomRSIcon: React.FC<ICustomRSIcon> = ({
  urlTo,
  imgUrl,
  alt,
}) => {
  return (
    <li>
      <a href={urlTo}>
        <motion.img
          src={imgUrl}
          alt={alt}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.5 }}
        />
      </a>
    </li>
  );
};
