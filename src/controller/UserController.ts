// import { Request, Response } from 'express';
// import { AppDataSource } from '../data-source';
// import { User } from '../entity/User';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { JsonWebTokenError } from 'jsonwebtoken';
// const saltRounds = 12;

import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/error';

const errorFunction = (error: any) => {
  const errors = {
    code: 400,
    error: {
      message: error.message,
    },
    message: 'Error has Occurred',
  };
  return errors;
};
// const messageFunction = (_message: string, _token?: string) => {
//   const message = {
//     message: _message,
//     token: _token,
//   };
//   return message;
// };

// const userRepository = AppDataSource.getRepository(User);

const user = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hii = 'i am there for you';
    console.log(hii);
    return next(new AppError('It is a test error', 500));
  } catch (error) {
    console.log(error);
    return res.status(200).json(error.message);
  }
};
// const registerUser = async (req: Request, res: Response) => {
//   try {
//     const images = req?.files as Record<string, Express.Multer.File[]>;
//     const profilePhoto = images?.profilePhoto?.[0];
//     const visitingCard = images?.visitingCard?.[0];
//     const verificationDoc = images?.verificationDoc;
//     const {
//       name,
//       mobile,
//       waMobile,
//       email,
//       password,
//       country,
//       state,
//       city,
//       role,
//       gstNumber,
//       companyName,
//       companyAddress,
//       companyWebsite,
//       docType,
//       verified,
//       disabled,
//       meta,
//       subrole,
//     } = req.body;
//     const userExist = await userRepository
//       .createQueryBuilder()
//       .select()
//       .where({
//         email: email,
//       })
//       .getOne();
//     if (userExist) {
//       return res
//         .status(400)
//         .json(messageFunction(' Email belongs to another User'));
//     }
//     const userMobileExist = await userRepository
//       .createQueryBuilder()
//       .select()
//       .where({ mobile: mobile })
//       .getOne();
//     if (userMobileExist) {
//       return res
//         .status(400)
//         .json(messageFunction('Mobile Number belongs to another User'));
//     }

//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashPassword = await bcrypt.hash(password, salt);
//     const createdUser = await userRepository
//       .createQueryBuilder()
//       .insert()
//       .into(User)
//       .values({
//         name: name,
//         profilePhoto: profilePhoto,
//         mobile: mobile,
//         waMobile: waMobile,
//         email: email,
//         password: hashPassword,
//         country: country,
//         state: state,
//         city: city,
//         role: role,
//         gstNumber: gstNumber,
//         companyName: companyName,
//         companyAddress: companyAddress,
//         companyWebsite: companyWebsite,
//         docType: docType,
//         visitingCard: visitingCard,
//         verificationDoc: verificationDoc,
//         verified: verified,
//         disabled: disabled,
//         meta: meta,
//         lastSeen: new Date(),
//         subrole: subrole,
//       })
//       .returning('*')
//       .execute();

//     const token = jwt.sign(
//       { userId: createdUser?.raw?.[0]?.id, role: 'user' },
//       process.env.TOKEN_KEY as string,
//       { expiresIn: '1h' }
//     );
//     return res
//       .status(200)
//       .json(messageFunction('User SignUp successfully', token));
//   } catch (error) {
//     const errors = errorFunction(error);
//     return res.status(400).json({ errors });
//   }
// };

// const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const userExist = await userRepository
//       .createQueryBuilder()
//       .select()
//       .where({
//         email: email,
//       })
//       .getOne();

//     if (!userExist) {
//       return res.status(400).json(messageFunction(" User doesn't exist"));
//     }
//     const hashPassword = userExist?.password;
//     const correctPassword = await bcrypt.compare(password, hashPassword);
//     if (!correctPassword) {
//       return res.status(400).json(messageFunction('Enter the proper password'));
//     }

//     const token = jwt.sign(
//       { userId: userExist?.id, role: 'user' },
//       process.env.TOKEN_KEY as string,
//       { expiresIn: '1h' }
//     );
//     return res
//       .status(200)
//       .json(messageFunction('User login successfully', token));
//   } catch (error) {
//     const errors = errorFunction(error);
//     return res.status(400).json({ errors });
//   }
// };

// export { loginUser, registerUser };

// const deleteCompany = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const user = req.app.get('user');
//     const isRole = user?.role;

//     if (!(isRole === 'company')) {
//       console.log();
//       throw new Error('hiii');
//       // return res.status(400).json(messageFunction('User is unauthorized'));
//     }

//     // const deletedCompany = await companyRepository
//     //   .createQueryBuilder('company')
//     //   .delete()
//     //   .from(Company)
//     //   .where({ id: user.userId })
//     //   .returning('*')
//     //   .execute();

//     res.status(200).json(messageFunction('Company deleted successfully'));
//   } catch (error) {
//     console.log('next working');
//     next(error);
//     // const errors = errorFunction(error);
//     // return res.status(400).json({ errors });
//   }
// };
export { user };
