import { CartProduct } from './cart-product';

export class Cart {
    public id: number;
    public userId: number;
    public cartProducts: CartProduct[];
}