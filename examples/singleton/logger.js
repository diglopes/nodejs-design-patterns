class Logger {
  constructor() {
    this.config = {
      appName: "Not configured",
    };
  }

  setConfig(config = {}) {
    this.config = config;
  }

  log(message, ...params) {
    console.log(this.config.appName, "::", message, "::", params);
  }
}

/**
 *  Node.js keeps the imported modules on cache,
 *  so the Logger instance will be instantiated
 *  just once.
 */
module.exports = new Logger();
