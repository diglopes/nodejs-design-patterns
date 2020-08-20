const logger = require("./logger");
const { start } = require("./some.module");
logger.setConfig({ appName: "My amazing app" });
logger2 = Object.create(logger);
logger2.setConfig({ appName: "Test logger" });

logger.log("App has been initialized");
logger2.log("New logger here!", 1, 2, 3);
start();
