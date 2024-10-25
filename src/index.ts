import { Elysia, t } from "elysia";

const app = new Elysia({ name: "Controller.user", prefix: "/hello" })
  .get("/hi", () => "Hi Ming")
  .get("/id/:id", ({ params: { id } }) => id)
  .post("/mirror", ({ body }) => body, {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
    }),
  })
  .listen(3000);

export type App = typeof app;
