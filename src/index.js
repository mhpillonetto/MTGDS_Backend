import express from 'express';

import models, {connectDb} from './models';

const app = express();

connectDb().then(async () => {
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`),
    );
  });