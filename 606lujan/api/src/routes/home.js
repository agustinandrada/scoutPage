const { Router } = require("express");
const { homeHandler } = require("../handlers/homeHandler");

const homeRouter = Router();

homeRouter.get("/", homeHandler);

module.exports = homeRouter;
