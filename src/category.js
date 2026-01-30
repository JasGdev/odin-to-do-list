export default class category {
    constructor(name, item){
        this.nameOfCategory = name;
        this.items = [item];
        this.totalSpending = item.cost;
    }

    addItem(categoryOfItem, categoryList, cost, item){
        const categoryFound = categoryList.find(categoryInList => categoryInList.nameOfCategory === categoryOfItem);
        if (categoryFound){
            categoryFound.totalSpending += cost;
            categoryFound.items.push(item)
            console.log(categoryFound)
        } else {
            const newCategory = new category(categoryOfItem, item);
            categoryList.push(newCategory)  
        }
    }
}