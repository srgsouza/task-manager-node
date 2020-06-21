const mongoose = require('mongoose');

const databaseName = 'task-manager';
const connectionURL = `${process.env.MONGO_DB_URI}/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true });
