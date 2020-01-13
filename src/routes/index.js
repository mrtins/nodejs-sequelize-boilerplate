import express from 'express';

import user from '../controllers/user.controller';

const router = express();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/users', user);

export default router;