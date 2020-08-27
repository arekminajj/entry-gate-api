import { writeJson } from "https://deno.land/std/fs/mod.ts";

export async function changeStatus(isClosed: boolean, shouldBeClosed: boolean) {
    writeJson(
        "./status.json",
        { IsClosed: isClosed, ShouldBeClosed: shouldBeClosed }
      );
}
