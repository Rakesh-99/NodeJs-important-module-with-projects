

// With the help of fs(file System) module we can do operations like :

/*
        1. readfile operation 
        2. write file operation 
        3. append file operation 
        4. delete file operation
*/


// 1. readFile operation :


const fs = require('fs');

/*
fs.readFile('./abc.txt', (err, data) => {
    if (err) {
        console.log('error is : ' + err);
    } else {
        console.log('The data we get is : ' + data);
    };
});
*/



// 2. writeFile operation :

/*
let content = 'Hello, this is dummy file !';
fs.writeFile('demo.js', content, (err) => {
    if (err) {
        console.log(`The error is : ${err}`);
    } else {
        console.log(`File has been written successfully !`);
    }
});
*/




// 3. appendFile operation :

/*
fs.appendFile('./demo.js', ' Rakesh Kumar Parida ', (err) => {
    if (err) {
        console.log('The error is : ' + err);
    } else {
        console.log('Data appended sucessfully !');
    }
});
*/



// 4. deletFile opearation:

/*
fs.unlink('./abc.txt', (err) => {
    if (err) {
        console.log('There is some error with deleting file : ' + err);
    } else {
        console.log('File has been deleted successfully !');
    }
});
*/
