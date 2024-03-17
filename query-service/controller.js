require('dotenv').config()
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

async function getEmployee(req, res) {   
    try {
        let { email, company, page = 1, pageSize = 10 } = req.query;
        page = parseInt(page);
        pageSize = parseInt(pageSize);
        
        let query = db('employee');
        
        if (email) {
          query = query.where('email', email);
        }

        if (company) {
          query = query.where('company', company);
        }
        
        const totalCountQuery = await query.clone().count('id').first();
        const totalCount = parseInt(totalCountQuery.count);
        const totalPages = Math.ceil(totalCount / pageSize);
            
        const employees = await query
          .select()
          .offset((page - 1) * pageSize)
          .limit(pageSize);
        
        res.json({
          totalCount,
          totalPages,
          currentPage: page,
          pageSize,
          employees
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getEmployee
}