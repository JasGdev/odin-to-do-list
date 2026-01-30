export default class listItem {
    constructor(name, cost, category, description, date, priority){
        // need input
        this.name = name;
        this.cost = cost;
        this.category = category

        // optional input after item creation or
        // by selection additional info on item creation
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completeStatus = false;
        this.id = crypto.randomUUID(); 
    }
    

}


