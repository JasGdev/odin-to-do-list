export default class category {
    constructor(name) {
        this.nameOfCategory = name;
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
        this.totalSpending += item.total;
    }

    removeItem(idToRemove){
        this.items = this.items.filter((item) => item.id !== idToRemove);
    }

    getTotalSpending(){
        // 
        let total = 0;
        this.items.forEach((item) => {
            total += item.total
        })
        return total
    }

    getItemCount(){
        return this.items.length;
    }
}