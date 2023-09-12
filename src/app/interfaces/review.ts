import { User } from "./user";

export interface Review {
    content: string;
    created: Date; //date
    fromTMDB: boolean;
    rating: number;
    updated: Date;
    user: User;
}
