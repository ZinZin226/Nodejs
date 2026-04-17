const fs = require ('fs');

const readStream = fs.createReadStream('./docs/large.txt');
const writeStream = fs.createWriteStream('./docs/large_write.txt');

// // pipe method
// readStream.on('data', function(data){
//     writeStream.write(data.toString())
//     writeStream.write('------------------New Chunk------------------')
// })

readStream.pipe(writeStream)