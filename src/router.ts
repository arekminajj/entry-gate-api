import { Router, RouterContext, Status } from "../deps.ts";
import { GateStatus } from './gateStatus.ts'
import { changeStatus } from './changeStatus.ts'

const router = new Router();

router
  .get("/api/status", async (ctx: RouterContext) => {
    const decoder = new TextDecoder('utf-8')
    let data = await Deno.readFile('status.json');
    let json = JSON.parse(decoder.decode(data))

    ctx.response.body = json;
    console.log(json);
  })
  .post("/api/status", async (context: RouterContext) => {
    if (!context.request.hasBody) {
      context.throw(Status.BadRequest, "Bad Request");
    }
    const body = context.request.body();
    let status: Partial<GateStatus> | undefined;
    if (body.type === "json") {
      status = await body.value;
    }

    if (status) {
      changeStatus(status.IsClosed, status.ShouldBeClosed)

      context.response.status = Status.OK;
      context.response.body = status;
      context.response.type = "json";
      console.log("Status has been updated.")
      return;
    }
    context.throw(Status.BadRequest, "Bad Request");
  });

export default router;
