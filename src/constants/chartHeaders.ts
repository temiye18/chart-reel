interface SubHeader {
  heading: string;
  text: string;
}
interface Headers {
  crypto: SubHeader;
  forex: SubHeader;
  stocks: SubHeader;
  futures: SubHeader;
}

const chartHeaders: Headers = {
  crypto: {
    heading: "Cryptocurrencies",
    text: "Crypt The price is calculated using a global volume-weighted average price formula which is based on the pairings available on different exchanges of a particular crypto asset. For examples and more detailed information on how we track cryptocurrency prices and other metrics",
  },

  forex: {
    heading: "Forex - Currency Pairs",
    text: "Comprehensive and easy-to-use live forex chart that tracks the movements of thousands of currency pairs in the global Forex market.",
  },

  stocks: {
    heading: "Stocks",
    text: "See the top gaining, losing, and most active stocks for the day. It updates based on current market activity – so you'll always see the most relevant stocks.",
  },

  futures: {
    heading: "Futures",
    text: "Intraday futures charts are updated continuously during trading hours; daily commodity/futures charts are updated every market day; weekly charts are updated at the end of each week; monthly charts are updated at the end of each month.",
  },
};

export default chartHeaders;
