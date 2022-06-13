import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import List from "../components/list/List";
import {
  changeItemDescriptionFromLocalStorage,
  getListOnLocalStorage,
  removeItemFromLocalStorage,
  setListOnLocalStorage,
  toggleItemFromLocalStorage,
} from "../hooks/useLocalStorage";
import { IListItem } from "../types/listTypes/listItem";

function Todo() {
  const { t } = useTranslation();
  const [list, setList] = useState<IListItem[]>([]);

  const [description, setDescription] = useState<string>("");

  function getList() {
    const convertedList = getListOnLocalStorage();
    setList(convertedList);
  }

  function handleSetListOnLocalStorage(newList: IListItem[]) {
    setListOnLocalStorage(newList);
    getList();
  }

  function handleCreateItem() {
    let newList: any;
    console.log(list);
    if (list === undefined) {
      newList = [];
    } else {
      newList = list;
    }
    const newItem = {
      id: `${description}-${Math.floor(Math.random() * (10000 - 1 + 1)) + 1}`,
      description: description,
      isDone: false,
    };

    newList.push(newItem);
    handleSetListOnLocalStorage(newList);
    setDescription("");
  }

  useEffect(() => {
    getList();
  }, []);

  function handleEditItem(newItem: IListItem) {
    console.log(newItem);
    changeItemDescriptionFromLocalStorage(newItem);
    getList();
  }
  function handleRemoveItem(itemId?: string) {
    console.log(itemId);
    removeItemFromLocalStorage(itemId ?? "");
    getList();
  }
  function handleToggleItem(itemId?: string) {
    console.log(itemId);
    toggleItemFromLocalStorage(itemId ?? "");
    getList();
  }

  return (
    <div className="todo min-h-screen min-w-screen px-10 py-4 flex flex-col items-center w-full">
      <div className="list_header mb-3 w-full">
        <div className="flex items-center gap-2">
          <input
            type="text"
            name=""
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("description")}
            className="bg-gray-200 w-full p-1 px-2 rounded-lg ring-0 focus:outline-none"
          />
          <button
            onClick={() => handleCreateItem()}
            className="ml-auto flex items-center  dark:bg-blue-200 text-sm  bg-yellow-200 rounded-lg gap-2 px-2 py-1 dark:text-blue-600 text-yellow-600"
          >
            <i className="bi bi-save"></i>
            {t("create")}
          </button>
        </div>
      </div>
      <div className="divider w-full h-[1px] rounded-lg bg-yellow-600 dark:bg-blue-600 mb-2"></div>
      <List
        handleEditItem={handleEditItem}
        handleRemoveItem={handleRemoveItem}
        handleToggleItem={handleToggleItem}
        list={list}
      ></List>
    </div>
  );
}

export default Todo;
