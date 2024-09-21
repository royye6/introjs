import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import mockData from "../constants/constants.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

router.get("/api/todos", (req, res) => {
    const {
        query: { filter, value },
    } = req;

    if (filter && value)
        return res.send(
            mockData.filter((todo) => todo[filter].includes(value))
        );
    return res.send(mockData);

    // res.sendFile(path.join(__dirname, "../../public", "/page/todos.html"));
    // res.send(mockData);
});

router.get("/api/todos/:id", (req, res) => {
    console.log(req.params);

    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId))
        return res.status.send({ msg: "Bad Request. Invalid ID." });

    const findTodo = mockData.find((todo) => todo.id === parsedId);
    if (!findTodo) return res.sendStatus(404);
    return res.send(findTodo);

    // res.sendFile(path.join(__dirname, "../../public", "/page/todos.html"));
});

router.post("/api/todos", (req, res) => {
    const { body } = req;
    const newTodo = { id: mockData[mockData.length - 1].id + 1, ...body };
    mockData.push(newTodo);

    return res.status(201).send(newTodo);

    // res.sendFile(path.join(__dirname, "../../public", "/page/todos.html"));
});

router.patch("/api/todos/:id", (req, res) => {
    const {
        body,
        params: { id },
    } = req;

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) return res.sendStatus(400);
    const findTodoIndex = mockData.findIndex((todo) => todo.id === parsedId);
    if (findTodoIndex === -1) return res.sendStatus(404);
    mockData[findTodoIndex] = { ...mockData[findTodoIndex], ...body };
    res.sendStatus(200);

    // res.sendFile(path.join(__dirname, "../../public", "/page/todos.html"));
});

router.delete("/api/todos/:id", (req, res) => {
    const {
        params: { id },
    } = req;

    const parsedId = parseInt(id);

    if (isNaN(parsedId)) return res.sendStatus(400);

    const findTodoIndex = mockData.findIndex((todo) => todo.id === parsedId);
    if (findTodoIndex === -1) return res.sendStatus(404);

    mockData.splice(findTodoIndex, 1);
    return res.sendStatus(200);

    // res.sendFile(path.join(__dirname, "../../public", "/page/todos.html"));
});

export default router;
