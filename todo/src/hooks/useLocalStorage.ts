import { IListItem } from "./../types/listTypes/listItem";

export function getListOnLocalStorage() {
  if (localStorage.getItem("list")) {
    const convertedList = JSON.parse(String(localStorage.getItem("list")));
    return convertedList ?? [];
  }
}

export function setListOnLocalStorage(newList: IListItem[]) {
  localStorage.setItem("list", JSON.stringify(newList));
}

export function removeItemFromLocalStorage(itemId: string) {
  const list = JSON.parse(String(localStorage.getItem("list")));
  const newList = list.filter((item: IListItem) => {
    if (item.id !== itemId) return item;
  });
  setListOnLocalStorage(newList);
}

export function toggleItemFromLocalStorage(itemId: string) {
  const list = JSON.parse(String(localStorage.getItem("list")));
  const newList = list.map((item: IListItem) => {
    if (item.id === itemId) {
      item.isDone = !item.isDone;
    }
    return item;
  });
  setListOnLocalStorage(newList);
}
export function changeItemDescriptionFromLocalStorage(newItem: IListItem) {
  const list = JSON.parse(String(localStorage.getItem("list")));
  const newList = list.map((item: IListItem) => {
    if (item.id === newItem.id) {
      item = newItem;
    }
    return item;
  });
  setListOnLocalStorage(newList);
}
