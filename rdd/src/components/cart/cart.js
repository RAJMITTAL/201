import {beverageTax, foodTax} from "./config"
export class Cart {

    constructor() {
        this.Items = [];
        this.cartTotal=0;
        this.cartTax=0;
    }

    update(item) {
        var oldItem = this.Items.findIndex(cItem => cItem.id === item.id)
        console.log(oldItem);
        if (oldItem != -1) {
            console.log("found")
            this.Items[oldItem].count = item.count;
            return;
        }
        console.log('in new')
        this.Items.push(item)
    }
    reconcile(data)
    {
        this.Items.forEach(item => {
           const index = data.findIndex(dataItem => dataItem.id == item.id);

            item.title = data[index].title;
            item.unitCost = data[index].price;
            item.image  = data[index].photoSmall
            item.totalCost = item.count * item.unitCost;
            item.tax = item.totalCost * (item.foodType ==="f"?foodTax:beverageTax);

            this.cartTotal+=item.totalCost;
            this.cartTax+= item.tax;
            this.grandTotal = this.cartTotal + this.cartTax;

        });
    }

}
export class CartItem {

    constructor(id, count) {
        this.id = id;
        this.count = count;

        this.image = "";
        this.unitCost="";
        this.totalCost="";
        this.title ="";
        this.tax="";
    }

}