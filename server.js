const Koa = require("koa");
const BodyParser = require("koa-bodyparser");

const todoRouter = require("./routes/todosRoutes");
const logger = require('./middleware/logger')
const app = new Koa();

const PORT = process.env.PORT || 4000;

app.use(BodyParser());
app.use(todoRouter.routes()).use(todoRouter.allowedMethods());
app.use(logger)

app.on("error", (error, ctx) => {
  ctx.status = error.statusCode || error.status || 500;
  ctx.body = {
    message: error,
  };
  console.log(error);
});

app.listen(4000, () => {
  console.log("server has been started");
});
