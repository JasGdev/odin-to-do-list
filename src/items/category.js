export default class category {
    constructor(name) {
        this.nameOfCategory = name;
        this.items = [];
        this.totalSpending = 0;
    }

    addItem(item){
        this.items.push(item);
        this.totalSpending += item.cost;
    }

    removeItem(idToRemove, itemToRemoveCost){
        this.items = this.items.filter((item) => item.id !== idToRemove);
        this.totalSpending -= itemToRemoveCost;
    }
}