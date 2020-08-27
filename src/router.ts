import { Router } from "../deps.ts";

const router = new Router();

router
  .get("/api", async (ctx: any) => {
    const decoder = new TextDecoder('utf-8')
    let data = await Deno.readFile('status.json');
    let json = JSON.parse(decoder.decode(data))

    ctx.response.body = json;
    console.log(json);
  })

export default router;
