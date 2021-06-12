import * as bcrypt from 'bcrypt';
import {SALT_OR_ROUND} from "../constants";

export const getHashedPassword = (pass: string) => {
  return bcrypt.hash(pass, SALT_OR_ROUND);
};
