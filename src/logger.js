import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console({ level: "info" }),
    new winston.transports.File({ filename: "deepTrading.log", level: "info" })
  ]
});
export default logger;
