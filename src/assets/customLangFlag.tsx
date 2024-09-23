import { useEffect, useState } from "react";
import { englandFlag, frenchFlag } from "../constants/appConstants";

interface ICustomLang {
  lang: string;
}

export const CustomLang: React.FC<ICustomLang> = ({ lang }) => {
  const [flag, setFlag] = useState<string>("");

  const getTheMatchingFlag = () => {
    switch (lang) {
      case "FR" || "fr":
        setFlag(frenchFlag);
        break;
      default:
        setFlag(englandFlag);
        break;
    }
  };
  useEffect(() => {
    getTheMatchingFlag();
  }, []);
  return (
    <div className="flex justify-center gap-x-3 items-center">
      <img src={flag} alt="country_flag" className="h-6 w-7" style={{borderRadius: 50}} />{" "}
      <span>{lang}</span>
    </div>
  );
};
