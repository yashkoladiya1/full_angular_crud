const mongoose = require('mongoose');


const connection = () => {
    mongoose.connect(process.env.DB_LINK)
        .then(res=>{
            console.log('connected')
        })
        .catch(err=>{
            console.log(err)
        })
}

module.exports = connection;