export default class listItem {
    constructor(name, cost, category, description, dueDate,  paymentMethod, priority, ){
        // need input
        this.name = name;
        this.cost = cost;
        this.category = category

        // optional input after item creation or
        // by selection additional info on item creation
        this.description = description;
        this.dueDate = dueDate;
        this.paymentMethod = paymentMethod;
        this.priority = priority;
        this.completeStatus = false;
    }
    

}


