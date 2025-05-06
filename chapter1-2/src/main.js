import { add } from "./add"
// console.log('Result => ', add(1,2));

// Module , Export & Require
/*
    import EventEmitter from 'events';

    const eventEmitter = new EventEmitter();
    eventEmitter.on('Mr.a',(data) => {
        console.log('Mr.a data => ', data)
    })

    eventEmitter.emit('Mr.a',"Send data to Mr.a");
*/

// Events & Node Event Emitter
/*

    import { eventEmitter } from "./event"
    import { emitData } from "./publish"

    async function main(){

        // await emitData();
        setInterval(() => {
            eventEmitter.emit('Mr.a', "Send to Mr.a", Math.random());
        }, 1000);

        eventEmitter.on('Mr.a',(data , dataTwo) => {
            console.log('Mr.a data => ', data)
            console.log('More data => ', dataTwo)
            
            eventEmitter.emit('Mr.b', "Send to Mr.b" + dataTwo)
        })
        eventEmitter.on('Mr.b',(data) => {
            console.log('Mr.b data => ', data)        
        })
    }
    main();
*/

// Eventloop