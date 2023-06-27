import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'

interface User  {
    id: number;
    email: string;
    password: string;
    accessLevel: number;
    encryptPassword(password: string): string;
    comparePassword(password: string): boolean;
}

const userSchema = new Schema<User> ({
    id: {type: Number},
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true },
    accessLevel: {type: Number, required: false, default: 1},
})

userSchema.methods.encryptPassword = (password: string): string => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}
userSchema.methods.comparePassword = function (password: string ): boolean {
    return bcrypt.compareSync(password, this.password)
}

export default model<User>('User', userSchema, 'user')