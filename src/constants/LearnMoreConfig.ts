interface Symbol {
  tv: string[][];
  spta: string;
}

interface LearnMore {
  slug: string;
  symbol: Symbol;
}

const learnMoreConfig: LearnMore[] = [
  // CRYPTO
  {
    slug: "bitcoin",
    symbol: {
      tv: [["BITSTAMP:BTCUSD|12M"]],
      spta: "BITSTAMP:BTCUSD",
    },
  },

  {
    slug: "ethereum",
    symbol: {
      tv: [["BITSTAMP:ETHUSD|12M"]],
      spta: "BITSTAMP:ETHUSD",
    },
  },
  {
    slug: "binance",
    symbol: {
      tv: [["BINANCEUS:BNBUSD|12M"]],
      spta: "BINANCEUS:BNBUSD",
    },
  },
  {
    slug: "dogecoin",
    symbol: {
      tv: [["BINANCEUS:DOGEUSD|12M"]],
      spta: "BINANCEUS:DOGEUSD",
    },
  },
  {
    slug: "litecoin",
    symbol: {
      tv: [["BITSTAMP:LTCUSD|12M"]],
      spta: "BITSTAMP:LTCUSD",
    },
  },
  {
    slug: "mana",
    symbol: {
      tv: [["BINANCE:MANAUSD|12M"]],
      spta: "BINANCE:MANAUSD",
    },
  },
  {
    slug: "shiba-inu",
    symbol: {
      tv: [["BINANCE:SHIBUSDT|12M"]],
      spta: "BINANCE:SHIBUSDT",
    },
  },
  {
    slug: "usdt",
    symbol: {
      tv: [["BINANCEUS:USDTUSD|12M"]],
      spta: "BINANCEUS:USDTUSD",
    },
  },
  {
    slug: "uniswap",
    symbol: {
      tv: [["BINANCE:UNIUSD|12M"]],
      spta: "BINANCE:UNIUSD",
    },
  },
  {
    slug: "chainlink",
    symbol: {
      tv: [["BINANCE:LINKUSD|12M"]],
      spta: "BINANCE:LINKUSD",
    },
  },
  {
    slug: "atom",
    symbol: {
      tv: [["BINANCE:ATOMUSD|12M"]],
      spta: "BINANCE:ATOMUSD",
    },
  },
  {
    slug: "cardano",
    symbol: {
      tv: [["BINANCE:ADAUSD|12M"]],
      spta: "BINANCE:ADAUSD",
    },
  },
  {
    slug: "ravencoin",
    symbol: {
      tv: [["BINANCE:RVNUSD|12M"]],
      spta: "BINANCE:RVNUSD",
    },
  },
  {
    slug: "algorand",
    symbol: {
      tv: [["BINANCE:ALGOUSD|12M"]],
      spta: "BINANCE:ALGOUSD",
    },
  },
  {
    slug: "the-graph",
    symbol: {
      tv: [["BINANCE:GRTUSD|12M"]],
      spta: "BINANCE:GRTUSD",
    },
  },
  {
    slug: "polkadot",
    symbol: {
      tv: [["BINANCE:DOTUSD|12M"]],
      spta: "BINANCE:DOTUSD",
    },
  },
  {
    slug: "stellar",
    symbol: {
      tv: [["BINANCE:XLMUSD|12M"]],
      spta: "BINANCE:XLMUSD",
    },
  },
  {
    slug: "tezos",
    symbol: {
      tv: [["BINANCE:XTZUSD|12M"]],
      spta: "BINANCE:XTZUSD",
    },
  },
  {
    slug: "harmony",
    symbol: {
      tv: [["BINANCE:ONEUSD|12M"]],
      spta: "BINANCE:ONEUSD",
    },
  },
  {
    slug: "waves",
    symbol: {
      tv: [["BINANCE:WAVESUSD|12M"]],
      spta: "BINANCE:WAVESUSD",
    },
  },

  //   FOREX
  {
    slug: "audcad",
    symbol: {
      tv: [["FX_IDC:AUDCAD|12M"]],
      spta: "FX_IDC:AUDCAD",
    },
  },
  {
    slug: "usdngn",
    symbol: {
      tv: [["FX_IDC:USDNGN|12M"]],
      spta: "FX_IDC:USDNGN",
    },
  },
  {
    slug: "usdinr",
    symbol: {
      tv: [["FX_IDC:USDINR|12M"]],
      spta: "FX_IDC:USDINR",
    },
  },
  {
    slug: "eurusd",
    symbol: {
      tv: [["FX_IDC:EURUSD|12M"]],
      spta: "FX_IDC:EURUSD",
    },
  },
  {
    slug: "usdjpy",
    symbol: {
      tv: [["FX_IDC:USDJPY|12M"]],
      spta: "FX_IDC:USDJPY",
    },
  },
  {
    slug: "gbpusd",
    symbol: {
      tv: [["FX_IDC:GBPUSD|12M"]],
      spta: "FX_IDC:GBPUSD",
    },
  },
  {
    slug: "audusd",
    symbol: {
      tv: [["FX_IDC:AUDUSD|12M"]],
      spta: "FX_IDC:AUDUSD",
    },
  },
  {
    slug: "usdcad",
    symbol: {
      tv: [["FX_IDC:USDCAD|12M"]],
      spta: "FX_IDC:USDCAD",
    },
  },
  {
    slug: "usdcny",
    symbol: {
      tv: [["FX_IDC:USDCNY|12M"]],
      spta: "FX_IDC:USDCNY",
    },
  },
  {
    slug: "usdchf",
    symbol: {
      tv: [["FX_IDC:USDCHF|12M"]],
      spta: "FX_IDC:USDCHF",
    },
  },
  {
    slug: "usdhkd",
    symbol: {
      tv: [["FX_IDC:USDHKD|12M"]],
      spta: "FX_IDC:USDHKD",
    },
  },
  {
    slug: "eurgbp",
    symbol: {
      tv: [["FX_IDC:EURGBP|12M"]],
      spta: "FX_IDC:EURGBP",
    },
  },

  //  STOCKS

  {
    slug: "apple-inc",
    symbol: {
      tv: [["NASDAQ:AAPL|12M"]],
      spta: "NASDAQ:AAPL",
    },
  },
  {
    slug: "tesla-inc",
    symbol: {
      tv: [["NASDAQ:TSLA|12M"]],
      spta: "NASDAQ:TSLA",
    },
  },
  {
    slug: "meta",
    symbol: {
      tv: [["NASDAQ:META|12M"]],
      spta: "NASDAQ:META",
    },
  },
  {
    slug: "alphabet-inc",
    symbol: {
      tv: [["NASDAQ:GOOGL|12M"]],
      spta: "NASDAQ:GOOGL",
    },
  },
  {
    slug: "microsoft",
    symbol: {
      tv: [["NASDAQ:MSFT|12M"]],
      spta: "NASDAQ:MSFT",
    },
  },
  {
    slug: "netflix-inc",
    symbol: {
      tv: [["NASDAQ:NFLX|12M"]],
      spta: "NASDAQ:NFLX",
    },
  },
  {
    slug: "amazon",
    symbol: {
      tv: [["NASDAQ:AMZN|12M"]],
      spta: "NASDAQ:AMZN",
    },
  },
  {
    slug: "alibaba-ltd",
    symbol: {
      tv: [["NYSE:BABA|12M"]],
      spta: "NYSE:BABA",
    },
  },

  // FUTURES

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

export default learnMoreConfig;
