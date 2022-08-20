const express = require('express');
const TaskRoutes = require('./routes/tasks');
const ConnectDatabase = require('./db/connect');
require('dotenv').config();
const NotFound = require('./middlewares/not-found');


const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', TaskRoutes);
app.use(NotFound);


const port = process.env.LISTEN_PORT;

// app.get('/', (req, res) => {
//     res.end('Task Manager App!');
// });


async function RunServer() {
    try {
        await ConnectDatabase(process.env.MONGO_URI);

        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    }
    catch (error) {
        console.log('Error Running Server: ', error);
    }
}

RunServer();
