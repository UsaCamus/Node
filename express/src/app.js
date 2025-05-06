import express from 'express'
import bodyParser from 'body-parser';

const app = express();

/*app.get('/test-express', (req, res) => {
    // res.send("Hello Wolrd")
    res.json({
        name: "Usa",
        position: "Software Engineer",
        company: "Gosoft"
    })
})*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

let todoList = [];
app.post('/todos/bulk',(req,res) => {
    todoList.push(...req.body);
    res.send(req.body);
});
app.post('/todos',(req,res) => {
    todoList.push(req.body);
    res.send(req.body);
});

app.delete('/todos/:id', (req,res) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === req.params.id);

    if(todoIndex === -1){
        res.status(404).send("Todo not found")
        return;
    }
    todoList.splice(todoIndex,1);
    res.send(req.params.id);
});
app.delete('/todos', (req,res) => {
    const listIds = req.query.in.split(',')
    todoList = todoList.filter((todo) => !listIds.includes(todo.id));
    res.send(listIds);
});

app.put('/todos/:id', (req,res) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === req.params.id);

    if(todoIndex === -1){
        res.status(404).send("Todo not found")
        return;
    }
    todoList[todoIndex] = req.body
    res.send(todoList[todoIndex]);
});

app.patch('/todos/:id', (req,res) => {
    const todoIndex = todoList.findIndex((todo) => todo.id === req.params.id);

    if(todoIndex === -1){
        res.status(404).send("Todo not found")
        return;
    }
    todoList[todoIndex] = {...todoList[todoIndex] ,...req.body}
    res.send(todoList[todoIndex]);
});

app.get('/todos', (req,res)=>{
    res.send(todoList);
});

app.get('/todos/:id', (req,res)=>{
    const todo = todoList.find((todo) => todo.id === req.params.id)
    if(todo){
        res.send(todo)
    }
    res.status(404).send('Todo Not Found')
});

app.listen(3002, () => {
    console.log('http://localhost:3002');
})