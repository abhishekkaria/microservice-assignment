const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

async function enterRecords(data){   
    try {
        const message = JSON.parse(data)
        
        const dbData = {
            "name" : message["Employee Name"],
            "phone" : message["Phone Number"],
            "email" : message["Email Address"],
            "company" : message["Company"],
        }
        
        await db('employee').insert(dbData);              

        console.log('Data inserted into PostgreSQL database');
    } catch (error) {
        console.error('Error inserting data into PostgreSQL:', error);
    }
}

module.exports = {
    enterRecords
}