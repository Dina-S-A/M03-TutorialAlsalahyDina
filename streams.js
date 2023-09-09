const fs = require('fs');

/*const readStream = fs.createReadStream('./docs/blogs3.txt'); // creats a read stream from the desired file

readStream.on ('data',(chunk) =>{     // "on" here is like on the stream defined ubove, it is like evenlistener that fires when a buffer is read, so on data recieved the function there gets executed
    console.log('-----new chunk---------');
        console.log(chunk);   // we can add chunk.toString to convert the buffer content to string or else we can do that in the reasStream declaration and add the utf8 as follows

})*/



const readStream = fs.createReadStream('./docs/blogs3.txt', { encoding: 'utf8' }); // here utf8 converts the buffer immediatly to string format
const writeSteam = fs.createWriteStream('./docs/blogs4.txt');

/*readStream.on ('data',(chunk) =>{     
    console.log('-----new chunk---------');
        console.log(chunk);  
        writeSteam.write('\n new chunk \n')  // this code is added to write the file content to a new blogs4.txt file
        writeSteam.write(chunk)

})*/


//piping 
readStream.pipe(writeSteam);  // this part is doing the same as what is up there, but it is much easier as it creats a pipe cpnnects stright between the file we read from int the file we write into
