import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "Hi";
  }),
});

export type AppRouter = typeof appRouter;
