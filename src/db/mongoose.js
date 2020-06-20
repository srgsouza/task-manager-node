const mongoose = require('mongoose');

const databaseName = 'task-manager';
const connectionURL = `mongodb+srv://ss-user-tm:nEsNmmaxJwefAoRy@taskmanager-seica.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true });
