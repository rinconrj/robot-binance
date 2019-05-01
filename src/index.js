import Express from "express";
import logger from "./logger";
import api from "binance";
require("dotenv").config();
const app = Express();

const binanceRest = new api.BinanceRest({
  key: process.env.BINANCE_API_KEY,
  secret: process.env.BINANCE_SECRET,
  timeout: 15000, // Optional, defaults to 15000, is the request time out in milliseconds
  recvWindow: 10000, // Optional, defaults to 5000, increase if you're getting timestamp errors
  disableBeautification: false,
  handleDrift: false
});

const binanceWS = new api.BinanceWS(true);
binanceWS.onDepthUpdate("BNBBTC", data => {
  logger.info(data);
});

// binanceWS.onAggTrade("BNBBTC", data => {
//   console.log(data);
// });

// binanceWS.onKline("BNBBTC", "1m", data => {
//   console.log(data);
// });
app.listen(process.env.PORT, () => {
  console.log("Binance Robot Server Running");
});
