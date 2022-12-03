import { AppRoutes } from "./";
interface Nav {
  id: number;
  name: string;
  url: string;
}

const navLinks: Nav[] = [
  {
    id: 1,
    name: "Home",
    url: AppRoutes.home,
  },

  {
    id: 2,
    name: "Crypto",
    url: AppRoutes.crypto,
  },
  {
    id: 3,
    name: "Forex",
    url: AppRoutes.forex,
  },
  {
    id: 4,
    name: "Stocks",
    url: AppRoutes.stocks,
  },
  {
    id: 5,
    name: "Futures",
    url: AppRoutes.futures,
  },
  {
    id: 6,
    name: "Advanced Charts",
    url: AppRoutes.advanced.advanced,
  },
];

export default navLinks;
