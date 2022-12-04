interface Symbol {
  tv: string[][];
  spta: string;
}

interface Futures {
  slug: string;
  symbol: Symbol;
}

interface AdvancedChart {
  slug: string;
  symbol: string;
}

const advancedChartConfig: AdvancedChart[] = [
  {
    slug: "bitcoin",
    symbol: "BITSTAMP:BTCUSD",
  },
  {
    slug: "ethereum",
    symbol: "BITSTAMP:ETHUSD",
  },
  {
    slug: "binance",
    symbol: "BINANCEUS:BNBUSD",
  },
  {
    slug: "dogecoin",
    symbol: "BINANCEUS:DOGEUSD",
  },
  {
    slug: "litecoin",
    symbol: "BITSTAMP:LTCUSD",
  },
  {
    slug: "mana",
    symbol: "BINANCE:MANAUSD",
  },
  {
    slug: "shiba-inu",
    symbol: "BINANCE:SHIBUSDT",
  },
  {
    slug: "usdt",
    symbol: "BINANCEUS:USDTUSD",
  },
  {
    slug: "uniswap",
    symbol: "BINANCE:UNIUSD",
  },
  {
    slug: "chainlink",
    symbol: "BINANCE:LINKUSD",
  },
  {
    slug: "atom",
    symbol: "BINANCE:ATOMUSD",
  },
  {
    slug: "cardano",
    symbol: "BINANCE:ADAUSD",
  },
  {
    slug: "ravencoin",
    symbol: "BINANCE:RVNUSD",
  },
  {
    slug: "algorand",
    symbol: "BINANCE:ALGOUSD",
  },
  {
    slug: "the-graph",
    symbol: "BINANCE:GRTUSD",
  },
  {
    slug: "polkadot",
    symbol: "BINANCE:DOTUSD",
  },
  {
    slug: "stellar",
    symbol: "BINANCE:XLMUSD",
  },
  {
    slug: "tezos",
    symbol: "BINANCE:XTZUSD",
  },
  {
    slug: "harmony",
    symbol: "BINANCE:ONEUSD",
  },
  {
    slug: "waves",
    symbol: "BITSTAMP:BTCUSD",
  },
  {
    slug: "audcad",
    symbol: "FX_IDC:AUDCAD",
  },
  {
    slug: "usdngn",
    symbol: "FX_IDC:USDNGN",
  },
  {
    slug: "usdinr",
    symbol: "FX_IDC:USDINR",
  },
  {
    slug: "eurusd",
    symbol: "FX_IDC:EURUSD",
  },
  {
    slug: "usdjpy",
    symbol: "FX_IDC:USDJPY",
  },
  {
    slug: "gbpusd",
    symbol: "FX_IDC:GBPUSD",
  },
  {
    slug: "audusd",
    symbol: "FX_IDC:AUDUSD",
  },
  {
    slug: "usdcad",
    symbol: "FX_IDC:USDCAD",
  },
  {
    slug: "usdcny",
    symbol: "FX_IDC:USDCNY",
  },
  {
    slug: "usdchf",
    symbol: "FX_IDC:USDCHF",
  },
  {
    slug: "usdhkd",
    symbol: "FX_IDC:USDHKD",
  },
  {
    slug: "eurgbp",
    symbol: "FX_IDC:EURGBP",
  },
  {
    slug: "apple-inc",
    symbol: "NASDAQ:AAPL",
  },
  {
    slug: "tesla-inc",
    symbol: "NASDAQ:TSLA",
  },
  {
    slug: "meta",
    symbol: "NASDAQ:META",
  },
  {
    slug: "alphabet-inc",
    symbol: "NASDAQ:GOOGL",
  },
  {
    slug: "microsoft",
    symbol: "NASDAQ:MSFT",
  },
  {
    slug: "netflix-inc",
    symbol: "NASDAQ:NFLX",
  },
  {
    slug: "amazon",
    symbol: "NASDAQ:AMZN",
  },
  {
    slug: "alibaba-ltd",
    symbol: "NYSE   :BABA",
  },
];

export const futuresConfig: Futures[] = [
  {
    slug: "crude-oil",
    symbol: {
      tv: [["NYMEX:CL1!|12M"]],
      spta: "NYMEX:CL1!",
    },
  },
  {
    slug: "natural-gas",
    symbol: {
      tv: [["NYMEX:NG1!|12M"]],
      spta: "NYMEX:NG1!",
    },
  },
  {
    slug: "gasoline",
    symbol: {
      tv: [["NYMEX:RB1!|12M"]],
      spta: "NYMEX:RB1!",
    },
  },
  {
    slug: "heating-oil",
    symbol: {
      tv: [["NYMEX:HO1!|12M"]],
      spta: "NYMEX:HO1!",
    },
  },
  {
    slug: "ethanol",
    symbol: {
      tv: [["NYMEX:AEZ1!|12M"]],
      spta: "NYMEX:AEZ1!",
    },
  },
  {
    slug: "gold",
    symbol: {
      tv: [["COMEX:GC1!|12M"]],
      spta: "COMEX:GC1!",
    },
  },

  {
    slug: "silver",
    symbol: {
      tv: [["COMEX:si1!|12M"]],
      spta: "COMEX:si1!",
    },
  },
];

export default advancedChartConfig;
