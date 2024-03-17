const app = require('./app');
require('dotenv').config()

const PORT = process.env.PORT;
const QUEUE_NAME = process.env.rmq_name;
const RMQ_HOST = process.env.rmq_host;

// Setup RabbitMQ and start the server
const { setupRabbitMQ } = require('./utils/queue')

setupRabbitMQ(RMQ_HOST, QUEUE_NAME).then(() => {
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
