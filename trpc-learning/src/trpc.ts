import { initTRPC } from "@trpc/server";

const t = initTRPC.context<{username? : string , userId? : string , token? : string}>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
