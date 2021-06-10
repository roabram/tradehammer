import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(404).send();
});

export default router;
