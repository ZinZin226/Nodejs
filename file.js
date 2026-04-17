const fs= require('fs');

// // read
// fs.readFile('./docs/creativecoder.txt', (err, data)=>{
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log(data.toString())
//     }
// })

// // write 
// fs.writeFile('./docs/creativecoder.txt', 'This is for write file', (err, data)=>{
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('file written successfully, Check the file')
//     }
// })

// if(!fs.existsSync('./docs/createnewfile.txt')){ // check the file exists or not
//     fs.writeFile('./docs/createnewfile.txt', 'This is for create new file', (err, data)=>{
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('File is successfully created')
//     }
// })
// }
// else{
//     // delete file
//     fs.unlink('./docs/createnewfile.txt', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('file deleted')
//         }
//     })
// }


//console.log(' The lastest line of code')

if (fs.existsSync('./newfolder')){
    // folder delete
    fs.rmdir('./newfolder', (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('folder deleted')
        }
    })
}
else{
    // folder create
    fs.mkdir('./newfolder', (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('folder created')
        }
    })
}