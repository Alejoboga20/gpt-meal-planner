import express from 'express';
import { RoutesVersion, router } from './routes/routes';

const defaultPort = 3000;

/* Initilize Express Application */
const app = express();
const port = process.env.PORT || defaultPort;

/* Define Routes */
app.use(RoutesVersion.v1, router);

/* Start Express Server */
app.listen(port, () => console.log(`App listening on port ${port}!`));
