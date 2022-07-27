const amount = 1

if(amount < 10){
    console.log('small number');
}
else{
    console.log('large number')
}

console.log(`hey its my first noide app`)

// GLOBALS -NO WINDOW!!!!

// __dirname - path to current directory
// __filename - file name

//require  - function to use modules(CommonJS)
//module  --  info abount current module(file)
//process  -- info about env where the ptogramm is being executed

console.log(__dirname)
setInterval(() =>{
    console.log("hello world")
},1000)