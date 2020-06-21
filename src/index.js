const express = require('express');
require('dotenv').config();
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000; // used in Heroku

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.get('/', (req, res) => {
    res.send('Welcome - This is a demo Node.js REST API application - /users and /tasks are live ');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
