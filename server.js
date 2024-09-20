import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/index.html'));
});

app.get('/counter', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/counter.html'));
});

app.get('/number-guesser', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/numberGuesser.html'));
});

app.get('/password-generator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/passwordGenerator.html'));
});

app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/calculator.html'));
});

app.get('/api/todos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/todos.html'));
});

app.get('/api/todos/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/todos.html'));
});

app.post('/api/todos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/todos.html'));
});

app.patch('/api/todos:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/todos.html'));
});

app.delete('/api/todos:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/page/todos.html'));
});

app.listen(8080, () => console.log(`Server is running on port 8080`));