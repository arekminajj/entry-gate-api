import { Router } from "../deps.ts";

const router = new Router();

router
  .get("/", (ctx: any) => {
    ctx.response.body = "hello";
    console.log("hello");
  })

export default router;