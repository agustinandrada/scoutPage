const { Router } = require("express");
const homeRouter = require("./home");

const mainRouter = Router();

mainRouter.use("/home", homeRouter);

module.exports = mainRouter;
