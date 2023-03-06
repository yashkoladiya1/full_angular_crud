const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./database/db')
const allapi = require('./routes/AllRoutes')
const dotenv = require('dotenv'); 
dotenv.config()
app.use(cors());
app.use(express.json());
app.use('/api',allapi)

connection();
app.listen(2000,()=>{
    console.log('server is running on http://localhost:2000')
})