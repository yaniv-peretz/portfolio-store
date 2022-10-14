import * as trpc from "@trpc/server";
import superjson from "superjson";
import { createRouter } from "./context";
export { createContext } from "./context";
import admin from "./admin.route";
import user from "./user.route";
import auth from "./auth.route";

export const router = trpc.router();

export const appRouter = createRouter().transformer(superjson).merge("admin.", admin).merge("user.", user).merge("auth.", auth);
export type AppRouter = typeof appRouter;