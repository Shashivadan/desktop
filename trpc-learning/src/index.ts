import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
    signUp : publicProcedure.input(z.object({
      email : z.string().email(),
      password : z.string()
    })).mutation(async (opts) => {
      const username=  opts.ctx.username
      const email = opts.input.email
      const password = opts.input.password
      // db stuff
      return {username}
    })
});

export type AppRouter = typeof appRouter;


const server = createHTTPServer({
  router: appRouter,
  createContext(opts){

    const header = opts.req["authorization"]
    const token = "fhaj3krhkwejrkwhrkjwhkj3k2h";
    return { username : "shashi", token}
  }
});

server.listen(3000 , () => {
  console.log("server is online");

});