const amqp = require('amqplib');
let ch;
let queue;
const {enterRecords} = require('../controller');

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

        // Set prefetch count to 1
        channel.prefetch(1);
        
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

async function consume(){
    // Consume messages
    await ch.consume(queue, async function(msg) {
        const message = msg.content.toString();
        console.log("Received message:", message);
  
        // Pass the message to controller
        await enterRecords(message)

        ch.ack(msg)
      }, {
        noAck: false
      });
}

module.exports = {
    setupRabbitMQ,
    publish,
    consume
};