import { User } from '../database/models/user.model';

declare module 'express' {
    export interface Request {
        user?: User;
    }
}
