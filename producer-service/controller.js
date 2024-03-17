const csv = require('csvtojson')
const { publish } = require('./utils/queue')

async function uploadCsv(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
               
        const fileData = req.file.buffer.toString();       
                  
        await csv()
        .fromString(fileData)
        .subscribe((jsonObj)=>{
            const message = JSON.stringify(jsonObj);
            
            // Publish message to queue
            publish(message)
        })
        
        res.status(200).send({message : 'CSV data processed successfully'});
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Internal server error');
    }
}

module.exports = {
    uploadCsv
};
