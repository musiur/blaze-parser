import { type ClassValue, clsx } from "clsx"
import { Error as MongooseError } from 'mongoose';
import { Document } from 'mongoose';

import { twMerge } from "tailwind-merge"
import { ZodError } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface MongoDBError extends Error {
  code?: number;
}
export function SA_ErrorHandler(e: any) {
  let errorMessage = 'Something went wrong';

  if (e instanceof ZodError) {
    errorMessage = e.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
  } else if ((e as MongoDBError).code === 11000) {
    errorMessage = 'A user with this email already exists.';
  } else if (e instanceof MongooseError) {
    errorMessage = 'A database error occurred.';
  } else if (e instanceof Error) {
    errorMessage = e.message;
  }

  return {
    success: false,
    message: errorMessage,
  };
}


export function ConvertMongoDBDocument<T extends Document>(doc: T) {
  return {
    ...doc.toObject(),
    _id: doc._id.toString(),
  };
}

