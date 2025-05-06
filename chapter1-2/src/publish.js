import { eventEmitter } from "./event";


export function emitData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            eventEmitter.emit('Mr.a',"Send data to Mr.a across module");
            resolve()
        }, 1000);    
    })    
}