import { Query } from "mongoose";

import { NoteModel } from "../../models/note.model";

export function createNote(NoteData){
    const newNote = new NoteModel(NoteData);
    return newNote.save();
}

export function updateNoteById(id, NoteData){
    return NoteModel.findByIdAndUpdate(id, NoteData);
}

export function deleteNoteById(id){
    return NoteModel.findByIdAndDelete(id);
}

export function findById(id){
    return NoteModel.findById(id);
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

    if(query.tag){
        baseQuery = {
            ...baseQuery,
            tag : query.tag
        }
    }

    if(query.status){
        baseQuery = {
            ...baseQuery,
            status : query.status
        }
    }

    console.log('baseQuery', baseQuery);
    return NoteModel.find({})
}