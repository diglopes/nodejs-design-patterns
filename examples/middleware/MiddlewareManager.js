const DataPipeline = require("./DataPipeline");

function MiddlewareManager() {
  this.middlewares = [];
}

MiddlewareManager.prototype.process = function (data = {}) {
  const dataPipeline = new DataPipeline(this.middlewares, data);
  dataPipeline.dispatch();
};

MiddlewareManager.prototype.use = function (middleware) {
  this.middlewares.push(middleware);
};

MiddlewareManager.prototype.refresh = function () {
  this.middlewares = [];
};

module.exports = MiddlewareManager;
