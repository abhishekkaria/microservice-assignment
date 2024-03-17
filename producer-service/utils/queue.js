const amqp = require('amqplib');
let ch;
let queue;

async function setupRabbitMQ(host, q) {
    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect(host,);
        const channel = await connection.createChannel();
        queue = q
        
        // Assert the queue
        await channel.assertQueue(queue, {
            durable: false
        });
        
        ch = channel;

        console.log('RabbitMQ setup completed');
    } catch (error) {
        console.error('Error setting up RabbitMQ:', error);
        process.exit(1);
    }
}

async function publish(message) {
    try {        
        ch.sendToQueue(queue, Buffer.from(message));
    } catch (error) {
        console.error('Error publish message RabbitMQ:', error);        
    }
}

module.exports = {
    setupRabbitMQ,
    publish
};