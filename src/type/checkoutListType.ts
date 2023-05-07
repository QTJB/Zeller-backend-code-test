/**
 * Checkout class attribute type
 */


/**
 * Item list type used in checkout class
 */
export interface  checkoutItemList {
    [sku : string] : simpleItemObject;
}

/**
 * function list type in checkout class
 * pass function as parameter.
 */
export interface  checkoutPromoFunctionList {
    [sku : string] : (quantity: number, price: number) => number;
}


interface simpleItemObject {
    quantity : number;
    price: number;
}
