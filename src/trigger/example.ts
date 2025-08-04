import { logger, task, wait } from "@trigger.dev/sdk/v3";

// Hello world task
export const helloWorldTask = task({
  id: "hello-world",
  maxDuration: 300,
  run: async (payload: any, { ctx }) => {
    logger.log("Hello, world!", { payload, ctx });

    await wait.for({ seconds: 5 });

    return {
      message: "Hello, world!",
    };
  },
});

// New: Greet user task
export const greetUserTask = task({
  id: "greet-user",
  maxDuration: 300,
  run: async (payload: { name: string }, { ctx }) => {
    logger.log(`Greeting user`, { payload });

    await wait.for({ seconds: 2 });

    return {
      message: `Hello, ${payload.name}! Welcome aboard.`,
    };
  },
});

export const addNumbersTask = task({
  id: "add-numbers",
  maxDuration: 300,
  run: async (payload: { a: number; b: number }, { ctx }) => {
    const result = payload.a + payload.b;
    logger.log("Adding numbers", { a: payload.a, b: payload.b, result });
    return { result };
  },
});

export const subtractnumbersTask = task({
  id: "subtract-numbers",
  maxDuration: 300,
  run: async (payload: { a: number; b: number }, { ctx }) => {
    const result = payload.a - payload.b;
    logger.log("Subtract numbers", { a: payload.a, b: payload.b, result });
    return { result };
  },
});

export const multiplynumbersTask = task({
  id: "multiply-numbers",
  maxDuration: 300,
  run: async (payload: { a: number; b: number }, { ctx }) => {
    const result = payload.a * payload.b;
    logger.log("Multiply numbers", { a: payload.a, b: payload.b, result });
    return { result };
  },
});

export const dividenumbersTask = task({
  id: "divide-numbers",
  maxDuration: 300,
  run: async (payload: { a: number; b: number }, { ctx }) => {
    const result = payload.a / payload.b;
    logger.log("Divide numberss", { a: payload.a, b: payload.b, result });
    return { result };
  },
});

export const timestampTask = task({
  id: "fetch-timestamp",
  maxDuration: 300,
  run: async (_, { ctx }) => {
    const now = new Date().toISOString();
    logger.log("Returning current timestamp", { now });
    return { timestamp: now };
  },
});