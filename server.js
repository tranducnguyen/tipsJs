const app = require("./src/app");
const {app:{port}}= require('./src/configs/config.mongdb');
const PORT =port || 3000;

const server = app.listen(PORT,()=>{
    console.log(`Start server ${PORT}`);
})


// process.on('SIGINT',()=>{
//     server.close(()=>{
//         console.log('Exit Server!');
//     })
// });