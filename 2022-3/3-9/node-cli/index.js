const exprss = require("express");
const app = exprss();

function myLogger(req, res, next) {
  console.log("myLogger");
  next();
}

// node 最简单的拦截器使用 需在请求上边
app.use(myLogger);

app.get("/", function (req, res) {
  res.send("hello node");
});

app.get("/error", function (req, res) {
  throw new Error("error....");
});

function errorHandler(err, req, res, next) {
  res.status(501).json({ error: -1, msg: "错误" });
}

// 对异常的处理 需在请求下边
app.use(errorHandler);

const server = app.listen(5000, function () {
  console.log(server.path);
  console.log(server.address());
  const { address, port } = server.address();
  console.log(address);
  console.log("服务器 启动成功 http:// %s : %s", address, port);
});
