export default class category {
    constructor(name, item){
        this.nameOfCategory = name;
        this.items = [item];
        this.totalSpending = item.cost;
    }
}