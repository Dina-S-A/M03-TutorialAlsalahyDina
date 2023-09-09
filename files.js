
const fs = require('fs') // fs is file system

// reading flies
/*fs.readFile('./docs/blogs1.txt', (err, data)=>{

    if (err){
        console.log(err);
    }
    console.log(data.toString());

})
// the comming code will be executed first before the console show the file content because it take time to read the file
//while the js execution contiues

console.log ("last line");*/

/*//write files
fs.writeFile('./docs/blogs1.txt', 'hello world' ,()=> {
    console.log('file was written'); // when we run it the file content is replaced with the new content
})

fs.writeFile('./docs/blogs2.txt', 'hello world' ,()=> {
    console.log('file was written'); // when try with a file name that doesn't exist, it does not give us an error , it creates that file for us
}) */


//Directories
if (! fs.existsSync('./assets')) {// here we say if assets doesn't exist creat it, note that sync means that execution waits to untill this part is done
  fs.mkdir('./assets' , (err) => {
    if(err){
        console.log(err);
    }
    console.log('folder created') // it creats a folder 

    // if we tried to creat a folder with the same name as an already exited folder it gives an error

  });
}else {
    // This part to delete the file in case it exists 
    fs.rmdir('./assets' , (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });

}


//deleting files    
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {   // unlink is the code used to delete the file
        if(err){
            console.log(err);
        }
        console.log("file deleted");
    })


}