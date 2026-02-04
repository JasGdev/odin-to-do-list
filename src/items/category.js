export default class category {
    constructor(name) {
        this.nameOfCategory = name;
        this.items = [];
        this.color = '#D3D3D3';
    }

    addItem(item){
        this.items.push(item);
    }

    removeItem(idToRemove){
        this.items = this.items.filter((item) => item.id !== idToRemove);
    }

    getTotalSpending(){
        // 
        let total = 0;
        this.items.forEach((item) => {
            total += item.getTotalForItem()
        })
        return total
    }

    getItemCount(){
        return this.items.length;
    }

    getColor(){
        return this.color;
    }

    getName(){
        return this.nameOfCategory;
    }


}