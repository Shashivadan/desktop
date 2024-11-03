import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../src";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  const data = await trpc.signUp.mutate({
    email: "shasih@gmail.com",
    password: "lslls",
  });

  console.log(data);
}

main();
