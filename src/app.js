if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
// const cron = require('node-cron');

const cors = require('cors');
// require('./utils/passport');
const express = require('express');
const config = require('./config');
const app = express();
// const {ApolloServer} = require('@apollo/server');
// const {expressMiddleware} = require('@apollo/server/express4');
// const {neoSchema} = require('./db/directConnection');
// const runSocketServer = require('./socketServer/server');
const eetase = require('eetase');
const http = require('http');
// const {DBRequest} = require('./utils/dbHelpers');
// const {mutationClearAllUnavailable} = require('./utils/queryNeo4j');
// const {Analytics} = require('./mixPanel/init');
const {router} = require('./routes');
const helmet = require('helmet');
// const {staticRouter} = require('./services/staticProxy');
// const {microServiceRouter} = require('./routes/microservices');

const httpServer = eetase(http.createServer(app));

const corsOptions = {
  origin: [process.env.BACKEND_ADDRESS, process.env.FRONT_DOMAIN], // Add any other allowed origins here
  credentials: true,
};

async function main() {
  app.use(express.json());
  app.use(cors(corsOptions));

  if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
  } else {
    // const schema = await neoSchema.getSchema();
    // const server = new ApolloServer({
    //   schema: schema,
    //   cors: {
    //     origin: true,
    //     methods: ['GET', 'POST', 'OPTIONS'],
    //   },
    // });
    // await server.start();
    // app.use('/graphql', expressMiddleware(server));
  }

  // app.use('/microservice', microServiceRouter);
  // app.use(staticRouter);

  app.use('/v1', router);

  // runSocketServer(httpServer, app);

  httpServer.listen(config.port, '0.0.0.0', () =>
    console.log(`Server ready at http://localhost:${config.port}/graphql`),
  );
}

main().then((e) => console.log('started'));
//
// cron.schedule('*/10 * * * *', async () => {
//   try {
//     const query = mutationClearAllUnavailable();
//     await DBRequest(query);
//   } catch (e) {
//     Analytics.log('backend error', {
//       distinct_id: 0,
//       error: e,
//       stack: e.stack,
//       errorMessage: 'cron.schedule',
//     });
//   }
// });
