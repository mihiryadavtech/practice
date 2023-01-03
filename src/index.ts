import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { Request, Response, NextFunction, urlencoded } from 'express';
import { AppDataSource } from './data-source';
import { error } from 'console';

const app = express();
const Port = (process.env.PORT as string) || 3000;

//Port Connection

//class Error handler
class AppError extends Error {
  status: number | undefined;

  constructor(message?: string, status?: number) {
    super(message);
    this.status = status;
  }
}

const main = async () => {
  try {
    //Database Intilaization
    await AppDataSource.initialize();
    // image Show
    app.use('/api/v1/image', express.static('uploads/user'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes
    app.use('/api/v1', (req: Request, res: Response, next: NextFunction) => {
      console.log('hii there 1 next');
      return next(new Error('hiii there'));
    });

    app.use('/api/v1', (req: Request, res: Response, next: NextFunction) => {
      return res.json('hii there 2 next');
    });

    // Error
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.log('>>>>>>>', error);
      console.log('+++++', error.stack);
      res.status(500).send(error.message);
    });

    app.listen(Port, () => {
      console.log(`Listening on ${Port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
main();
