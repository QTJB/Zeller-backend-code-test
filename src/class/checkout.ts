/**
 * class for checkout
 * 
 * this class is based on assumption that each peoduct has a unique sku code
 */

import type { Item }from './item';
import type {checkoutItemList, checkoutPromoFunctionList} from '../type/checkoutListType';

 export class Checkout {

    /**
     * Scaned product list.
     * Use sku as property name
     * forexample
     * itemList: {
     *  "atv" : {
     *      "quantity" : 1,
     *      "price" : 109.50  
     *  }
     * }
     */
    private itemList : checkoutItemList = {};

    /**
     * Calculate function list.
     * same as {itemList}, use sku as property name. 
     * use property name to mapping the {itemList} 
     */
    private promoFunction : checkoutPromoFunctionList = {};
    
    /**
     * scan item to checkout class
     * @param {Item} item product item type
     */
    public scan(item : Item) {

        const itemSKU = item.SKU;

        if (this.itemList.hasOwnProperty(itemSKU)) {
            //If scaned same product type before
            ++this.itemList[itemSKU].quantity;
        } else {
            //New product type
            this.itemList[itemSKU] = {
                quantity: 1,
                price : item.Price
            }
        }
        console.log("Scan Product: " + itemSKU);
    }

    /**
     * Add calculate method for specify product
     * Pass function as property value
     * @param sku product sku
     * @param promo method used for calculate this product
     */
    public addPromoFunction(sku: string, promo: (quantity:number, price: number) => number){
        this.promoFunction[sku] = promo;
    }


    /**
     * Calculate total price
     * @returns {number} total price.
     */
    public total() {
        //If no specify any function to product
        if (Object.keys(this.promoFunction).length === 0) {
            return this.originalPrice();
          } else {
            let totalPrice = 0;

            let property: keyof typeof this.itemList; // Type is 'checkoutItemList'
    
            /**
             * Go through all product
             * use property name of itemList and promoFunction to map the function to product
             */
            for (property in this.itemList) {
                if (this.promoFunction.hasOwnProperty(property)) {
                    /**
                     * If specify function for related product
                     * pass quantity and price as parameter
                     */
                    totalPrice += this.promoFunction[property](this.itemList[property].quantity, this.itemList[property].price);
                } else {
                    //original price 
                    totalPrice += this.itemList[property].quantity * this.itemList[property].price;
                }
            }
    
            return totalPrice;
          }
    }

    private originalPrice() {
        let totalPrice = 0;

        let property: keyof typeof this.itemList; // Type is 'foo' | 'bar'

        for (property in this.itemList) {
            totalPrice += this.itemList[property].quantity * this.itemList[property].price;
        }

        return totalPrice;

    }
}
