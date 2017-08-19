// import necessary modules.
// undefined
import express from 'express';

import bodyParser from 'body-parser';

import { router as apiRoutes } from './server/routes/api';

// initalize express
const app = express();

app.use(bodyParser.json());

// parse html posts
app.use(bodyParser.urlencoded({ extended: true }));


// define api routes
app.use('/api', apiRoutes);

export default app;
