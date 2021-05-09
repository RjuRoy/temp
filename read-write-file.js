const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8', (error, result)=>{
    if(error){
        console.log(error);
        return
    }
    const first = result;


    writeFile('./content/two.txt', 'this is my text', (error, result)=>{
        if(error){
            console.log(error);
            return
        }

        const second = result;
    })
});