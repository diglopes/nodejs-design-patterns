## Singleton provides a single instance avaiable globally

- A singleton pattern create a new instance of the class if one doesn't exist. If an instance already exists, it returns the  reference to that object;
- Created either on program initialization or upon first access;
- No public constructor, you cannot instatiate directly;
- Can be sub-classed.

## When should I use?

- You can only have a single instance;
- You need to manage the state of this instance;
- You don't care about initialization of this instance at runtime;
- You need to access it across your app.