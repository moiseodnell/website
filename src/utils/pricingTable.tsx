import { t } from "i18next";

import {
  CardEditSVG,
  CardSVG,
  MoneySVG,
  PhoneSVG,
  WireSVG,
  WorldSVG,
  SafeSVG,
} from "../assets/customSvg";

export const PricingTable = ({
  country,
  profile,
  title,
}: {
  country: string;
  profile: string;
  title: string;
}) => {
  const data = [
    {
      title: "standard",
      country: "CM",
      subs: `${t("pricing.monthlySub")} : 0`,
      topup: `${t("pricing.topup")}` + " : " + "2.5 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      withdraw: `${t("pricing.withdraw")} : ` + "3 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "3 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "5 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "5 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "5 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "5 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "5 %",
      localToMobileMoneyBF: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneySN: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyCI: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyTG: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyBJ: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyML: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
    },
    {
      title: "premium",
      country: "CM",
      subs: `${t("pricing.monthlySub")} 2000 FCFA`,
      topup: `${t("pricing.topup")}` + " : " + "2 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      withdraw: `${t("pricing.withdraw")} : ` + "2 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "5 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "5 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "5 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "5 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "5 %",
      localToMobileMoneyBF: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneySN: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyCI: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyTG: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyBJ: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
      localToMobileMoneyML: `${t("pricing.localToPayqinBF")}` + " : " + "5 %",
    },

    {
      title: "standard",
      country: "CI",
      subs: `${t("pricing.monthlySub")} : 0`,
      topup: `${t("pricing.topup")}` + " : " + "2.5 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "2.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1.5 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1.5 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "1.5 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1.5 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "2.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "3 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "2.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "2.5 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "3 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "2.5 %",
    },
    {
      title: "premium",
      country: "CI",
      subs: `${t("pricing.monthlySub")} : 2000 FCFA `,
      topup: `${t("pricing.topup")}` + " : " + "0",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "1.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "1 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "1.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "2 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "1.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "1.5 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "2.5 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "1.5 %",
    },

    {
      title: "standard",
      country: "BJ",
      subs: `${t("pricing.monthlySub")} : 0`,
      topup: `${t("pricing.topup")}` + " : " + "2 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "3 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "3 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1.5 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1.5 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1.5 %",
      localToPayqinTG: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "2.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "3 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "2.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "2.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "2.5 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "2.5 %",
    },
    {
      title: "premium",
      country: "BJ",
      subs: `${t("pricing.monthlySub")} : 2000 FCFA `,
      topup: `${t("pricing.topup")}` + " : " + "1.5 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "2.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1 %",
      localToPayqinTG: `${t("pricing.localToPayqinBF")}` + " : " + "1 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "1.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "2 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "1.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "1.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "1.5 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "1.5 %",
    },
    {
      title: "standard",
      country: "BF",
      subs: `${t("pricing.monthlySub")} : 0`,
      topup: `${t("pricing.topup")}` + " : " + "4 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "2.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinCM: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1.5 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1.5 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "1.5 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1.5 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1.5 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "3 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "3 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "2.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "2.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "2.5 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "2.5 %",
    },
    {
      title: "premium",
      country: "BF",
      subs: `${t("pricing.monthlySub")} : 2000 FCFA `,
      topup: `${t("pricing.topup")}` + " : " + "2.5 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "1.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinCM: `${t("pricing.localToPayqinBF")}` + " : " + "1 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "1 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "2.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "2 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "1.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "1.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "1.5 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "1.5 %",
    },
    {
      title: "standard",
      country: "ML",
      subs: `${t("pricing.monthlySub")} : 0`,
      topup: `${t("pricing.topup")}` + " : " + "4 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "2.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1.5 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1.5 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1.5 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "1.5 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1.5 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "3 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "3 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "2.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "2.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "2.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "2.5 %",
    },
    {
      title: "premium",
      country: "ML",
      subs: `${t("pricing.monthlySub")} : 2000 FCFA `,
      topup: `${t("pricing.topup")}` + " : " + "2.5 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "1.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "1 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "2.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "2 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "1.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "1.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "1.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "1.5 %",
    },
    {
      title: "standard",
      country: "SN",
      subs: `${t("pricing.monthlySub")} : 0`,
      topup: `${t("pricing.topup")}` + " : " + "2.5 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "2.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1.5 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1.5 %",
      localToPayqinTG: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1.5 %",
      localToPayqinML: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "3 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "3 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "2.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "2.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "2.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "2.5 %",
    },
    {
      title: "premium",
      country: "SN",
      subs: `${t("pricing.monthlySub")} : 2000 FCFA `,
      topup: `${t("pricing.topup")}` + " : " + "2 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "1.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1 %",
      localToPayqinTG: `${t("pricing.localToPayqinTG")}` + " : " + "1 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "2.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "2 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "1.5 %",
      localToMobileMoneyTG:
        `${t("pricing.localToMobileMoneyTG")}` + " : " + "1.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "1.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "1.5 %",
    },
    {
      title: "standard",
      country: "TG",
      subs: `${t("pricing.monthlySub")} : 0`,
      topup: `${t("pricing.topup")}` + " : " + "3 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "2.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1.5 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1.5 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1.5 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1.5 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1.5 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1.5 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "3 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "3 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "2.5 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "2.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "2.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "2.5 %",
    },
    {
      title: "premium",
      country: "TG",
      subs: `${t("pricing.monthlySub")} : 2000 FCFA `,
      topup: `${t("pricing.topup")}` + " : " + "2.5 %",
      cardCreation: `${t("pricing.cardAdd")} : 5000 FCFA`,
      cardFund: `${t("pricing.cardFund")} : 0 %`,
      physicalCard: `${t("pricing.physicalCard")} : 6 000 FCFA`,
      physicalCardFund: `${t("pricing.physicalCardFund")} : 1 %`,
      airtime: `${t("pricing.airtime")} : 0`,
      localToLocal: `${t("pricing.payqinLocalTransfer")} : 0 %`,
      withdraw: `${t("pricing.withdraw")} : ` + "1.5 %",
      localToPayqinLocal: `${t("pricing.localToPayqinLocal")}` + " : " + "0 %",
      localToMobileMoneyLocal:
        `${t("pricing.localToMobileMoneyLocal")}` + " : " + "2.5 %",
      localToPayqinBF: `${t("pricing.localToPayqinBF")}` + " : " + "1 %",
      localToPayqinCM: `${t("pricing.localToPayqinCM")}` + " : " + "1 %",
      localToPayqinSN: `${t("pricing.localToPayqinSN")}` + " : " + "1 %",
      localToPayqinCI: `${t("pricing.localToPayqinCI")}` + " : " + "1 %",
      localToPayqinBJ: `${t("pricing.localToPayqinBJ")}` + " : " + "1 %",
      localToPayqinML: `${t("pricing.localToPayqinML")}` + " : " + "1 %",
      localToMobileMoneyBJ:
        `${t("pricing.localToMobileMoneyBJ")}` + " : " + "2.5 %",
      localToMobileMoneyCM:
        `${t("pricing.localToMobileMoneyCM")}` + " : " + "2 %",
      localToMobileMoneyML:
        `${t("pricing.localToMobileMoneyML")}` + " : " + "1.5 %",
      localToMobileMoneySN:
        `${t("pricing.localToMobileMoneySN")}` + " : " + "1.5 %",
      localToMobileMoneyCI:
        `${t("pricing.localToMobileMoneyCI")}` + " : " + "1.5 %",
      localToMobileMoneyBF:
        `${t("pricing.localToMobileMoneyBF")}` + " : " + "1.5 %",
    },
  ];

  const filteredData = data.filter(
    (e) => e.country === country && e.title === profile
  );
  return (
    <div className="bg-payqinPricingBg px-2 py-4 md:px-20">
      <button className="px-3 py-3 bg-payqinDarkerPingBg">
        <p className="text-payqinViolet text-xl font-medium">{title}</p>
      </button>
      {filteredData.map((item, index) => (
        <div className="mt-10" key={index}>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <SafeSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">{item.subs}</p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <MoneySVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">{item.topup}</p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <CardEditSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">
              {item.cardCreation}
            </p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <CardSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">{item.cardFund}</p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <CardSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">
              {item.physicalCard}
            </p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <CardSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">
              {item.physicalCardFund}
            </p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <PhoneSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">{item.airtime}</p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <WireSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">{item.withdraw}</p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <WorldSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">
              {item.localToPayqinLocal}
            </p>
          </div>
          <div className="flex cursor-pointer my-4 gap-x-4 items-center">
            <WorldSVG size="30" color="#9863FC" />
            <p className="font-light text-base md:text-md">
              {item.localToMobileMoneyLocal}
            </p>
          </div>
          {item.localToPayqinBF && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToPayqinBF}
              </p>
            </div>
          )}
          {item.localToPayqinCM && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToPayqinCM}
              </p>
            </div>
          )}
          {item.localToPayqinSN && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToPayqinSN}
              </p>
            </div>
          )}
          {item.localToPayqinCI && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToPayqinCI}
              </p>
            </div>
          )}
          {item.localToPayqinBJ && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToPayqinBJ}
              </p>
            </div>
          )}
          {item.localToPayqinML && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToPayqinML}
              </p>
            </div>
          )}
          {item.localToMobileMoneyBJ && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToMobileMoneyBJ}
              </p>
            </div>
          )}
          {item.localToMobileMoneyCM && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToMobileMoneyCM}
              </p>
            </div>
          )}
          {item.localToMobileMoneyML && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToMobileMoneyML}
              </p>
            </div>
          )}
          {item.localToMobileMoneySN && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToMobileMoneySN}
              </p>
            </div>
          )}
          {item.localToMobileMoneyCI && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToMobileMoneyCI}
              </p>
            </div>
          )}
          {item.localToMobileMoneyBF && (
            <div className="flex cursor-pointer my-4 gap-x-4 items-center">
              <WorldSVG size="30" color="#9863FC" />
              <p className="font-light text-base md:text-md">
                {item.localToMobileMoneyBF}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
