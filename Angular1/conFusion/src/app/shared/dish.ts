import { Comment } from './comment';

export class Dish {
    name: string;
    image: string;
    category: string;
    label: string;
    price: number;
    description: string;
    comments: Comment[];
}
