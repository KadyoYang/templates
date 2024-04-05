import cors from "cors";
import express from "express";
import path from "path";
require("dotenv").config();

import routeTodo from "./routes/todo";

async function bootstrap() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors()); // CORS 이슈 해결
  app.use(express.urlencoded({ extended: true })); // query 받기
  app.use(express.json()); // body 받기

  // static 파일 설정
  app.use(express.static(path.join(__dirname, "public")));

  // ejs 설정
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  // default router 설정
  const router = express.Router();
  router.get("/", (req, res, next) => {
    res.redirect("/todo");
    // res.render("index.ejs");
  });
  router.get("/heartbeat", (req, res, next) => {
    res.send("alive");
  });

  //  express에 router 설정
  app.use(router);
  app.use("/todo", routeTodo);

  app.listen(PORT, () => {
    console.log(`
      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
      ┃   Server listening on port: ${PORT}    ┃
      ┃     http://localhost:${PORT}           ┃
      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
      `);
  });
}

bootstrap();
