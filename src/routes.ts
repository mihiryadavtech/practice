import { Router, Request, Response, NextFunction } from 'express';
import { user } from './controller/UserController';
const router = Router();

router.get('/user',user);

export { router as userRouter };



// import { AppError } from '../middleware/error';

// const errorFunction = (error: any) => {
//   const errors = {
//     code: 400,
//     error: {
//       message: error.message,
//     },
//     message: 'Error has occurred',
//   };
//   return errors;
// };

// const router = Router();
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/catalogue');
//   },
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });
// const upload = multer({
//   storage: storage,
  // fileFilter(req, file, callback) {
  //   if (file.fieldname === 'pdf') {
  //     if (file.mimetype === 'application/pdf') {
  //       callback(null, true);
  //     } else {
  //       return callback(new AppError('Only pdf format allowed!', 400));
  //     }
  //   } else if (file.fieldname === 'previewImage') {
  //     if (
  //       file.mimetype == 'image/png' ||
  //       file.mimetype == 'image/jpeg' ||
  //       file.mimetype == 'image/jpg'
  //     ) {
  //       callback(null, true);
  //     } else {
  //       callback(new AppError('Only image format allowed!'));
  //     }
  //   }
  // },
// });
