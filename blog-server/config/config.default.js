/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and  keep security
  config.keys = appInfo.name + "_1612335004785_7168";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: { enable: false },
    domainWhiteList: ["*"],
  };
  config.cors = {
    // origin: "http://127.0.0.1",
    credentials: true, //允许Cookiks可以跨域
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      host: "localhost",
      // port
      port: "3306",
      // username
      user: "root",
      // password
      password: "root",
      // database
      database: "rigblog",
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
  };
};
