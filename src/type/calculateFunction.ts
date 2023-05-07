/**
 * product item type
 */

/**
 * Sign function to the related product by using unique sku
 * every calculate function must have two parameter.
 * @param {number} quantity total quantity of product scaned 
 * @param {number} price original price 
 * @returns {number} total price of this type product
 * These two paramter allow more probability
 * If return number may has three-digit number, consider convert it to two-digit refore return
 */

export  type calculateFunction = (quantity : number, price : number) => number;