import { Request, Response } from 'express';

export const getTest = (req: Request, res: Response) => {
  res.json({ api: "testApi", result: Math.floor(Date.now() / 1000) });
};

export const getDateOnly = (req: Request, res: Response) => {
  const date = new Date().toISOString().split('T')[0];
  res.json({ api: "testApi", result: date });
};

export const postDateOnly = (req: Request, res: Response) => {
  const { timestamp } = req.body;
  const date = new Date(timestamp * 1000).toISOString().replace('T', ' ').split('.')[0];
  res.json({ api: "testApi", result: date });
};

export const getFromEnv = (req: Request, res: Response) => {
  const value = process.env.APP_ENV;
  res.json({ api: "testApi", result: value });
};