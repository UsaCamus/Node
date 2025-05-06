import { createWriteStream} from 'fs'

const writeStream = createWriteStream('future.txt')

// writeStream.write('Future-1\r\n')
// writeStream.write('Future-2\r\n')
// writeStream.write('Future-3\r\n')
// writeStream.end();

// let count = 1
// setInterval(() => {
//     writeStream.write(`Future-${count}\r\n`)
// }, 1000)

for(let count = 0; count <= 10; count++){
    writeStream.write(`Future-${count}\r\n`)
}
writeStream.end();