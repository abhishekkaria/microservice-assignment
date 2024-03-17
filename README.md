
# 🚀 Hi, I'm Abhishek Karia! 👋
writing this as a part of assesment


# Microservices Patterns with Node.js

This Project covers Shared Database Service Pattern, Messaging Pattern for communication (RabbitMQ). Aggregator Patters for cross db join.


## Tech Stack

**Server:** [Node.js](https://nodejs.org/en/download), [Express](https://expressjs.com/)

**Database:** [PostgreSQL](https://www.postgresql.org/download/)

**Queue:** [RabbitMQ](https://www.rabbitmq.com/download.html)


## Installation

Clone the project

```bash
  git clone https://github.com/abhishekkaria/microservice-assesment
```

Go to the project directory

```bash
  cd microservice-assesment
```

Install dependencies

```bash
  cd ../consumer-service  # Navigate to consumer-service folder
  npm install

  cd ../producer-service  # Navigate to producer-service folder
  npm install

  cd ../query-service  # Navigate to query-service folder
  npm install

```


## Environment Variables

Port, RabbitMQ, MongoDB and other details can be configured through .env file of relevant service.


## Running the Services

In each service folder (`aggregator-service/`, `comment-service/`, `user-service/`, `post-service/`), run the following command to install dependencies:

```bash
cd microservice-assesment  # Navigate to microservice-assesment folder

cd ../producer-service  # Navigate to producer-service folder
npm start

cd ../consumer-service  # Navigate to consumer-service folder
npm start

cd ../query-service  # Navigate to query-service folder
npm start
```


## Documentation

Provided postman collection.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](#)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abhishek-karia-8b8370149/)
