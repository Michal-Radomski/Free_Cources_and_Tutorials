import express, { Router, Request, Response } from "express";

const indexRouter: Router = express.Router();

indexRouter.get("/", async (req: Request, res: Response) => {
  await console.log("req.ip:", req.ip);
  await res.render("index", {});
});

indexRouter.get("/users/register", async (req: Request, res: Response) => {
  await console.log("req.ip:", req.ip);
  await res.render("register", {});
});

indexRouter.get("/users/login", async (req: Request, res: Response) => {
  await console.log("req.ip:", req.ip);
  await res.render("login", {});
});

indexRouter.get("/users/dashboard", async (req: Request, res: Response) => {
  await console.log("req.ip:", req.ip);
  await res.render("dashboard", { user: "Michal" });
});

export default indexRouter;
