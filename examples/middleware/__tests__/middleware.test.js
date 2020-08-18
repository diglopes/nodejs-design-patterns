const MiddlewareManager = require("../MiddlewareManager");

describe("MiddlewareManager", () => {
  const middlewareManager = new MiddlewareManager();
  const logMiddleware = (data, next) => {
    console.log("logMiddleware", data.user);
    next();
  };
  const data = {
    user: {
      name: "Jhon Doe",
    },
  };

  beforeEach(() => {
    middlewareManager.refresh();
  });

  it("should create a new instance of MiddlewareManager", () => {
    expect(middlewareManager).toBeInstanceOf(MiddlewareManager);
  });

  it("should execute all middlewares in order until reaching the end", () => {
    const nameEnhancerMiddleware = (data, next) => {
      const [firstName, lastName] = data.user.name.split(" ");
      data.user = {
        ...data.user,
        firstName,
        lastName,
      };
    };
    const expectMiddleware = (data, next) => {
      expect(data.user.firstName).toBe("Jhon");
      next();
    };

    middlewareManager.use(logMiddleware);
    middlewareManager.use(nameEnhancerMiddleware);
    middlewareManager.use(expectMiddleware);
    middlewareManager.process(data);
  });

  it("should finish the process pipeline when done is called", () => {
    let middlewareHasBeenCalled = false;

    const testOrderMiddleware = (data, next) => {
      middlewareHasBeenCalled = true;
      next();
    };
    const expectMiddleware = (data) => {
      data.end();
      expect(data.user.firstName).toBe("Jhon");
      expect(data.user.lastName).toBe("Doe");
      expect(middlewareHasBeenCalled).toBe(false);
    };

    middlewareManager.use(expectMiddleware);
    middlewareManager.use(testOrderMiddleware);
    middlewareManager.use(logMiddleware);
    middlewareManager.process(data);
  });
});
