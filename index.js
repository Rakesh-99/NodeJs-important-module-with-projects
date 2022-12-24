const path = require("path");
const fs = require("fs");
const location = path.join(__dirname, "./Components/files/");

/*
// 1. Write

let content = 'let a = 10; console.log(a*10);'
for (let i = 0; i <= 3; i++){
    fs.writeFileSync(location + 'readme' + i + '.txt',content );
};
*/



/*
// 2. read dir:
fs.readdir(location, (err, data) => {
    if (err) {
    console.log("The error is " + err);
    }
    else{
        data.forEach((res) => {
            console.log(`${res}`);
        });
        console.log(`The directories have been read successfully !`);

    };
});
*/
