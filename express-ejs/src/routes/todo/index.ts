import express from "express";
import { getConnection } from "../../database/mysql-pool";
import { Todo } from "./dto";

const router = express.Router();

// todo list 조회
router.get("/", async (req, res, next) => {
  const connection = await getConnection();
  const todos = (await connection.query("SELECT * FROM TODO"))[0] as Todo[];
  connection.release();

  res.render("todo/list.ejs", { todos });
});

// todo list 생성
router.post("/", async (req, res, next) => {
  const todoPayload: Partial<Todo> = {
    title: req.body.title || "",
    content: req.body.content || "",
  };
  const connection = await getConnection();
  await connection.execute("INSERT INTO TODO (title, content) VALUES (?,?)", [
    todoPayload.title,
    todoPayload.content,
  ]);
  connection.release();

  res.redirect("/todo");
});

// todo 상세 조회
router.get("/:id", async (req, res, next) => {
  const todoId = Number(req.params.id) || 0;
  const connection = await getConnection();
  const todos = (
    await connection.query("SELECT * FROM TODO WHERE id=?", [todoId])
  )[0] as Todo[];
  connection.release();

  if (todos.length === 0) {
    res.status(404);
    res.send("404 Not Found");
    return;
  }

  res.render("todo/detail.ejs", { todo: todos[0] });
});

// todo 수정
router.post("/update/:id", async (req, res, next) => {
  const todoId = Number(req.params.id) || 0;
  const todoPayload: Partial<Todo> = {
    title: req.body.title || "",
    content: req.body.content || "",
  };
  const connection = await getConnection();
  const todos = (
    await connection.query("UPDATE TODO SET title=?, content=? WHERE id=?", [
      todoPayload.title,
      todoPayload.content,
      todoId,
    ])
  )[0] as Todo[];
  connection.release();

  if (todos.length === 0) {
    res.status(404);
    res.send("404 Not Found");
    return;
  }

  res.redirect("/todo");
});

// todo 삭제
router.post("/delete/:id", async (req, res, next) => {
  const todoId = Number(req.params.id) || 0;

  const connection = await getConnection();
  const todos = (
    await connection.query("DELETE FROM TODO WHERE id=?", [todoId])
  )[0] as Todo[];
  connection.release();

  if (todos.length === 0) {
    res.status(404);
    res.send("404 Not Found");
    return;
  }

  res.redirect("/todo");
});

export default router;
