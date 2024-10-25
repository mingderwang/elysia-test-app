import { treaty } from "@elysiajs/eden";
import type { App } from "../src/index.ts";
import { describe, expect, it } from "bun:test";

const app = treaty<App>("localhost:3000");

describe("Elysia test", () => {
  it("return a response", async () => {
    const { data } = await app.hello.hi.get();

    expect(data).toBe("Hi Ming");
  });
});
