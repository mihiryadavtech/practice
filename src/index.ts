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
  statusCode: number | undefined;
  message: string;
  constructor(message?: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode;
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
      return next(new AppError('hiii there', 401));
    });

    app.use('/api/v1', (req: Request, res: Response, next: NextFunction) => {
      return res.status(500).json('hii there 2 next');
    });

    // Error
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        const status = error.statusCode || 400;
        const message = error.message || 'Error has occurred';
        return res.status(status).json(error.message);
      }
    );

    app.listen(Port, () => {
      console.log(`Listening on ${Port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
main();
