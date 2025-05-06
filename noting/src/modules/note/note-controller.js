import { Router } from "express";
import { createNote, updateNoteById, deleteNoteById, findById, findManyTodoList } from './note-service';
export const router = Router();

router.post('/notes' , async ( req , res) => {
    try {
        const newNote = await createNote(req.body);
        console.log(newNote);
        res.send(newNote)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.patch('/notes/:id', async (req,res) => {
    try {
        const updated = await updateNoteById(req.params.id , req.body)
        res.send(updated)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.delete('/notes/:id', async (req,res) => {
    try {
        await deleteNoteById(req.params.id)
        res.send({
            id : req.params.id,
            isDeleted : true,
        });
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get('/notes/:id', async (req,res) => {
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

router.get('/notes', async (req,res) => {
    try{
        const list = await findManyTodoList(req.query)
        res.send(list)
    } catch (error) {
        res.status(500).send(error);
    }
});
