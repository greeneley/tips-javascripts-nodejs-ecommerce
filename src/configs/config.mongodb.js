"use strict";

// level 0 => easy, just config on local

const config0 = {
  app: {
    port: 3052,
  },
  db: {
    host: "localhost",
    port: 27017,
    name: "db",
  },
};
// module.exports = config;

// level 1 => need to config both dev and production

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3052,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "shopDEV",
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT || 3052,
  },
  db: {
    host: process.env.PRO_DB_HOST || "localhost",
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "shopProduct",
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || "dev";
module.exports = config[env];
