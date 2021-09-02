require('dotenv').config()
const app = require(`C:\\users\\etaylor\\desktop\\backend_services\\api\\app.js`);
app.listen(process.env.API_PORT);
console.log("API is now listening at http://localhost" + process.env.API_PORT)