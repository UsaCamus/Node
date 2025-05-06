import { createReadStream, createWriteStream } from 'fs'
import { createGzip } from 'zlib'

const readMyProfileStream = createReadStream('gitlap.png')
const writeProfileCompressionStream = createWriteStream('gitlap.gz')

readMyProfileStream
    .pipe(createGzip({
        flush: 0, // ล้างท่อ
    }))
    .pipe(writeProfileCompressionStream) // เขียนไฟล์ขึ้นมา
    .on('finish', () => {
        console.log('cpmpressed finish')
        readMyProfileStream.close(); // ปิดการทำงาน
    })