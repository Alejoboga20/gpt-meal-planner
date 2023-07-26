import express from 'express';

const defaultPort = 3000;

/* Initilize Express Application */
const app = express();
const port = process.env.PORT || defaultPort;

app.get('/', (_, res) => res.send('Hello World!'));

/* Start Express Server */
app.listen(port, () => console.log(`App listening on port ${port}!`));
