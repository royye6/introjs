import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import counterRouter from "./src/routes/counter.mjs";
import numberGuesserRouter from "./src/routes/numberGuesser.mjs";
import passwordGeneratorRouter from "./src/routes/passwordGenerator.mjs";
import calculatorRouter from "./src/routes/calculator.mjs";
import todosRouter from "./src/routes/todos.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public", "js")));
app.use(express.json())

app.use(counterRouter);
app.use(numberGuesserRouter);
app.use(passwordGeneratorRouter);
app.use(calculatorRouter);
app.use(todosRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/page/index.html"));
});


app.listen(5000, () => console.log(`Server is running on port 5000`));
