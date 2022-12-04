interface Advanced {
  advanced: string;
  "learn-more": string;
}
interface Routes {
  home: string;
  crypto: string;
  forex: string;
  stocks: string;
  futures: string;
  advanced: Advanced;
}

const routes: Routes = {
  home: "/",
  crypto: "/crypto",
  forex: "/forex",
  stocks: "/stocks",
  futures: "/futures",
  advanced: {
    advanced: "/advanced-charts",
    "learn-more": "/learn-more",
  },
};

export default routes;
