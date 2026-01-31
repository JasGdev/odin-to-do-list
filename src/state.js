let itemList = [];
let categoryList = [];
const tax = 0.08
let totalSpending = 0;

export function getItemList() {
  return itemList;
}

export function getCategoryList() {
  return categoryList;
}

export function addItemToState(item) {
  itemList.push(item);
  totalSpending += item.cost;
}

export function removeItemFromState(id) {
  const index = itemList.findIndex(item => item.id === id);
  if (index !== -1) {
    totalSpending -= itemList[index].cost;
    itemList.splice(index, 1);
  }
}