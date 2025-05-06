import { Query } from "mongoose";
import { TodoModel } from "../../models/todo.model";

export function createTodo(todoData){
    const newTodo = new TodoModel(todoData)
    return newTodo.save()
}

export function updateTodoById(id , todoData){
    return TodoModel.findByIdAndUpdate(id, todoData);
}

export function deleteTodoById(id){
    return TodoModel.findByIdAndDelete(id);
}

export function findById(id){
    return TodoModel.findById(id);
}

export function findManyTodoList(query) {
    let baseQuery = {};
    if(query.search){
        baseQuery = {
            ...baseQuery, //ทำการ merge
            ...{
                title : {
                    $regex: new RegExp(query.search,'i'),
                },
            },
        };
    }

    if(query.status){
        baseQuery = {
            ...baseQuery,
            status : query.status
        }
    }

    if(query.assignee){
        baseQuery = {
            ...baseQuery,
            assignee : query.assignee
        }
    }

    if(query.sunscriberCounter){
        baseQuery = {
            ...baseQuery,
            sunscriberCounter : query.sunscriberCounter,
        }
    }

    if(query?.condition === 'or'){
        baseQuery = { 
            $or : Object.entries(baseQuery).map(([key,value]) => // version 6.0 up
                ({
                    [key] : value,
                })
            ),
        };
    }

    console.log('baseQuery', baseQuery);

    return TodoModel.find({})
}