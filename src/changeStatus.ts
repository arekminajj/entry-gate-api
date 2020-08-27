import { writeJson } from "https://deno.land/std/fs/mod.ts";

export async function changeStatus(isClosed: boolean, shouldBeClosed: boolean) {
    //const decoder = new TextDecoder('utf-8')
    //let data =await Deno.readFile('status.json');
    //let json = JSON.parse(decoder.decode(data))

    writeJson(
        "./status.json",
        { IsClosed: isClosed, ShouldBeClosed: shouldBeClosed }
      );

}