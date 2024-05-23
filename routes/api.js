const apiRouter = require("express").Router();

const gamesRouter = require("./games");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");
const pagesRouter = require("./pages");


apiRouter.use("/api", gamesRouter)
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);
apiRouter.use("/api", authRouter); 
apiRouter.use("/api", pagesRouter);


module.exports = apiRouter;