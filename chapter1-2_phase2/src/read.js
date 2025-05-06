import { createReadStream } from 'fs'

const readStream = createReadStream('future.txt')

readStream.on('data',(data) => {
    console.log(data.toString());
});