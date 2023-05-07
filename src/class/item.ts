/**
 * class for item
 */

export  class Item {
    private _SKU : string;
    private _Name: string;
    private _Price: number;

    /**
     * Product Item class. must includes three parameter
     * @param {string} SKU  product sku code, sku code must be unique
     * @param {string} Name  product name
     * @param {number} Price product price
     */
    constructor (SKU: string, Name: string, Price: number) {
        this._SKU = SKU;
        this._Name = Name;
        this._Price = Price;
    }

    
    public get SKU(): string {
        return this._SKU;
    }

    public get Name(): string {
        return this._Name;
    }

    public get Price(): number {
        return this._Price;
    }


}