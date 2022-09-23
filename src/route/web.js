import express from "express";
import homeController from "../controllers/homeController";
import auth from "../controllers/auth/index";
import middeware from "../middleware/loginMiddware";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/detail", homeController.getDetail);
  router.get("/about", homeController.getAboutPage);

  router.post("/register", auth.handleRegister);
  router.post("/login", auth.handleLogin);
  // router.post("/login", middeware.loginMiddware);

  return app.use("/", router);
};

module.exports = initWebRoutes;
