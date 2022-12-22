const findAvg = (a, b, c) => {
    console.log(((a + b + c) / 2));
};

const greet = (name) => {
    console.log(`Good Morning ${name}`);
};


module.exports = { // exporting the function.. so that file 1 can use it. 
    findAvg,
    greet
};