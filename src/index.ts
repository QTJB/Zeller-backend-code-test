/**
 * Import Item class file
 */
import  { Item } from './class/item.js';
/**
 * Import Checkout class file
 */
import { Checkout } from './class/checkout.js';

/**
 * Import calculateFunction type
 */
import type { calculateFunction }from '././type/calculateFunction.js';

/**
 * Create item instance
 * Item has three attributes: sku, name, price.
 * sku must be unique.
 */
const ipd = new Item('ipd', 'Super iPad', 549.99);
const mbp = new Item('mbp', 'MacBook Pro', 1399.99);
const atv = new Item('atv', 'Apple TV', 109.50);
const vga = new Item('vga', 'VGA adapter', 30.00);


let checkout = new Checkout();

console.log('start');


/**
 * 3 to 2 promo function 
 */
const threeToTwoFunction : calculateFunction = (quantity: number, price: number) => {
    if (quantity <= 2) return quantity * price;

    const remainder = quantity % 3;

    return ( quantity - remainder) / 3 * 2 * price + remainder * price;

}

/**
 * 
 * new promo price function 
 */
const bulkDiscountedFunction : calculateFunction = (quantity: number, price: number) => {
    //new price for  Super iPad 
    const newPrice = 499.99;
    if (quantity > 4) return quantity * newPrice;
    return quantity * price;
}


/**
 * If want to cancel the discount, sign this function to related product sku to override the function
 */
const originalFunction : calculateFunction = (quantity: number, price: number) => {
    return quantity * price;
}


/**
 * sign function to related product
 */
checkout.addPromoFunction('atv', threeToTwoFunction);
checkout.addPromoFunction('ipd', bulkDiscountedFunction);

/**
 * If want to remove the promo function.
 * Sign originalFunction to product again.
 */
// checkout.addPromoFunction('atv', originalFunction);
// checkout.addPromoFunction('ipd', originalFunction);




/**
 * First sinario
 */
// checkout.scan(atv);
// checkout.scan(atv);
// checkout.scan(atv);
// checkout.scan(vga);
// console.log(checkout.total());



/**
 * Second sinario
 */
checkout.scan(atv);
checkout.scan(atv);
checkout.scan(ipd);
checkout.scan(ipd);
checkout.scan(atv);
checkout.scan(ipd);
checkout.scan(ipd);
checkout.scan(ipd);

console.log(checkout.total());
