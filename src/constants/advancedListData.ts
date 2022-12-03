import {
  ada,
  algo,
  btc,
  doge,
  bnb,
  atom,
  dot,
  eth,
  grt,
  link,
  ltc,
  mana,
  one,
  rvn,
  shib,
  uni,
  usdt,
  waves,
  xlm,
  xtz,
  audcad,
  audusd,
  eurgbp,
  eurusd,
  gbpusd,
  usdcad,
  usdchf,
  usdcny,
  usdhkd,
  usdinr,
  usdjpy,
  usdngn,
  aapl,
  amzn,
  baba,
  googl,
  meta,
  msft,
  nflx,
  tsla,
  brentoil,
  crudeoil,
  ethanol,
  gasoline,
  gold,
  heatingoil,
  naturalgas,
  silver,
} from "./imageExports";

interface Commodity {
  category: string;
  name: string;
  slug: string;
  symbol: string;

  image: string;
}
interface Advanced {
  crypto: Commodity[];
  forex: Commodity[];
  stocks: Commodity[];
  futures: Commodity[];
}

const advancedListData: Advanced = {
  crypto: [
    {
      category: "crypto",
      name: "bitcoin",
      slug: "bitcoin",
      symbol: "BTC",

      image: btc,
    },
    {
      category: "crypto",
      name: "ethereum",
      slug: "ethereum",
      symbol: "ETH",

      image: eth,
    },
    {
      category: "crypto",
      name: "binance",
      slug: "binance",
      symbol: "BNB",

      image: bnb,
    },
    {
      category: "crypto",
      name: "dogecoin",
      slug: "dogecoin",
      symbol: "DOGE",

      image: doge,
    },
    {
      category: "crypto",
      name: "litecoin",
      slug: "litecoin",
      symbol: "LTC",

      image: ltc,
    },
    {
      category: "crypto",
      name: "mana",
      slug: "mana",
      symbol: "MANA",

      image: mana,
    },
    {
      category: "crypto",
      name: "shiba inu",
      slug: "shiba-inu",
      symbol: "SHIB",

      image: shib,
    },
    {
      category: "crypto",
      name: "usdt",
      slug: "usdt",
      symbol: "USDT",

      image: usdt,
    },
    {
      category: "crypto",
      name: "uniswap",
      slug: "uniswap",
      symbol: "UNI",

      image: uni,
    },
    {
      category: "crypto",
      name: "chainlink",
      slug: "chainlink",
      symbol: "LINK",

      image: link,
    },
    {
      category: "crypto",
      name: "atom",
      slug: "atom",
      symbol: "ATOM",

      image: atom,
    },
    {
      category: "crypto",
      name: "cardano",
      slug: "cardano",
      symbol: "ADA",

      image: ada,
    },
    {
      category: "crypto",
      name: "ravencoin",
      slug: "ravencoin",
      symbol: "RVN",

      image: rvn,
    },
    {
      category: "crypto",
      name: "algorand",
      slug: "algorand",
      symbol: "ALGO",

      image: algo,
    },
    {
      category: "crypto",
      name: "the graph",
      slug: "the-graph",
      symbol: "GRT",

      image: grt,
    },
    {
      category: "crypto",
      name: "polkadot",
      slug: "polkadot",
      symbol: "DOT",

      image: dot,
    },
    {
      category: "crypto",
      name: "stellar",
      slug: "stellar",
      symbol: "XLM",

      image: xlm,
    },
    {
      category: "crypto",
      name: "tezos",
      slug: "tezos",
      symbol: "XTZ",

      image: xtz,
    },
    {
      category: "crypto",
      name: "harmony",
      slug: "harmony",
      symbol: "ONE",

      image: one,
    },
    {
      category: "crypto",
      name: "waves",
      slug: "waves",
      symbol: "WAVES",

      image: waves,
    },
  ],
  forex: [
    {
      category: "forex",
      name: "audcad",
      slug: "audcad",
      symbol: "AUDCAD",

      image: audcad,
    },
    {
      category: "forex",
      name: "usdngn",
      slug: "usdngn",
      symbol: "USDNGN",

      image: usdngn,
    },
    {
      category: "forex",
      name: "usdinr",
      slug: "usdinr",
      symbol: "USDINR",

      image: usdinr,
    },
    {
      category: "forex",
      name: "eurusd",
      slug: "eurusd",
      symbol: "EURUSD",

      image: eurusd,
    },
    {
      category: "forex",
      name: "usdjpy",
      slug: "usdjpy",
      symbol: "USDJPY",

      image: usdjpy,
    },
    {
      category: "forex",
      name: "gbpusd",
      slug: "gbpusd",
      symbol: "GBPUSD",

      image: gbpusd,
    },
    {
      category: "forex",
      name: "audusd",
      slug: "audusd",
      symbol: "AUDUSD",

      image: audusd,
    },
    {
      category: "forex",
      name: "usdcad",
      slug: "usdcad",
      symbol: "USDCAD",

      image: usdcad,
    },
    {
      category: "forex",
      name: "usdcny",
      slug: "usdcny",
      symbol: "USDCNY",

      image: usdcny,
    },
    {
      category: "forex",
      name: "usdchf",
      slug: "usdchf",
      symbol: "USDCHF",

      image: usdchf,
    },
    {
      category: "forex",
      name: "usdhkd",
      slug: "usdhkd",
      symbol: "USDHKD",

      image: usdhkd,
    },
    {
      category: "forex",
      name: "eurgbp",
      slug: "eurgbp",
      symbol: "EURGBP",

      image: eurgbp,
    },
  ],
  stocks: [
    {
      category: "stocks",
      name: "apple inc",
      slug: "apple-inc",
      symbol: "AAPL",

      image: aapl,
    },
    {
      category: "stocks",
      name: "tesla inc",
      slug: "tesla-inc",
      symbol: "TSLA",

      image: tsla,
    },
    {
      category: "stocks",
      name: "meta",
      slug: "meta",
      symbol: "META",

      image: meta,
    },
    {
      category: "stocks",
      name: "alphabet inc",
      slug: "alphabet-inc",
      symbol: "GOOGL",

      image: googl,
    },
    {
      category: "stocks",
      name: "microsoft",
      slug: "microsoft",
      symbol: "MSFT",

      image: msft,
    },
    {
      category: "stocks",
      name: "netflix inc",
      slug: "netflix-inc",
      symbol: "NFLX",

      image: nflx,
    },
    {
      category: "stocks",
      name: "amazon.com",
      slug: "amazon",
      symbol: "AMZN",

      image: amzn,
    },
    {
      category: "stocks",
      name: "alibaba ltd",
      slug: "alibaba-ltd",
      symbol: "BABA",

      image: baba,
    },
  ],
  futures: [
    {
      category: "futures",
      name: "crude oil",
      slug: "crude-oil",
      symbol: "CL",

      image: crudeoil,
    },
    {
      category: "futures",
      name: "natural gas",
      slug: "natural-gas",
      symbol: "NG",

      image: naturalgas,
    },
    {
      category: "futures",
      name: "brent oil",
      slug: "brent-oil",
      symbol: "BZ",

      image: brentoil,
    },
    {
      category: "futures",
      name: "gasoline",
      slug: "gasoline",
      symbol: "RB",

      image: gasoline,
    },
    {
      category: "futures",
      name: "heating oil",
      slug: "heating-oil",
      symbol: "HO",

      image: heatingoil,
    },
    {
      category: "futures",
      name: "ethanol",
      slug: "ethanol",
      symbol: "ZC",

      image: ethanol,
    },
    {
      category: "futures",
      name: "gold",
      slug: "gold",
      symbol: "GC",

      image: gold,
    },
    {
      category: "futures",
      name: "silver",
      slug: "silver",
      symbol: "SI",

      image: silver,
    },
  ],
};

export default advancedListData;
