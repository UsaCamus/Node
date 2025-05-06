import { Router } from 'express';
import { createTodo, deleteTodoById, findById, findManyTodoList, updateTodoById } from './todo-service';

export const router = Router();

router.post('/todos', async (req,res) => {

    // ข้อมูลแปลกปลอมเข้ามา ไม่อยากให้ server ดับ ให้ทำการ try catch
    try {
        const newTodo = await createTodo(req.body);
        res.send(newTodo);
    } catch (error) {
        res.status(500).send(error)
    }
    
});

router.patch('/todos/:id', async (req,res) => {
    try {
        const updated = await updateTodoById(req.params.id , req.body)
        console.log('update',updated)
        res.send(updated)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.delete('/todos/:id', async (req,res) => {
    try {
        await deleteTodoById(req.params.id)
        res.send({
            id : req.params.id,
            isDeleted : true,
        });
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get('/todos/:id', async (req,res) => {
    try {
        const result = await findById(req.params.id)
        if(result == null){
            res.status(404).send({message: `Todo not Found => ${req.params.id}`})
            return;
        }
        res.send(result)
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/todos', async (req,res) => {
    try{
        const list = await findManyTodoList(req.query)
        res.send(list)
    } catch (error) {
        res.status(500).send(error);
    }
});
