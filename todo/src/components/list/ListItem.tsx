import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IListItem } from "../../types/listTypes/listItem";

export interface ListItemProps {
  listItem: IListItem;
  handleEditItem: (newItem: IListItem) => void;
  handleRemoveItem: (itemId?: string) => void;
  handleToggleItem: (itemId?: string) => void;
}

function ListItem({
  listItem,
  handleEditItem,
  handleRemoveItem,
  handleToggleItem,
}: ListItemProps) {
  const { t } = useTranslation();
  const { isDone, description, id } = listItem;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newDescription, setNewDescription] = useState(listItem.description);
  console.log({ listItem });

  function onSaveItem() {
    let newItem = listItem;
    newItem.description = newDescription;
    handleEditItem(newItem);
    setEditMode(false);
  }

  return listItem ? (
    <div className="list_content-item flex items-center h-10 gap-2">
      <div className="checkbox ">
        <button
          type="button"
          className={`w-4 h-4  0 flex items-center justify-center text-white rounded-md ${
            isDone ? "bg-green-500" : "bg-gray-200"
          }`}
          onClick={() => {
            handleToggleItem(id);
          }}
        >
          {isDone ? <i className="bi bi-check"></i> : <i></i>}
        </button>
      </div>
      <div className="text w-full">
        {editMode ? (
          <input
            type="text"
            name=""
            id=""
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="bg-gray-200 w-full p-1 px-2 rounded-lg ring-0 focus:outline-none"
          />
        ) : (
          <span className={`${isDone ? "line-through text-gray-400" : ""}`}>
            {description}
          </span>
        )}
      </div>
      <div className="ml-auto flex items-center gap-2">
        {editMode ? (
          <button
            type="button"
            onClick={() => onSaveItem()}
            className="flex dark:bg-blue-200  bg-yellow-200 text-sm rounded-lg items-center gap-2 px-2 py-1 dark:text-blue-600 text-yellow-600"
          >
            <i className="bi bi-pencil-fill"></i>
            {t("save")}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setEditMode(true)}
            className="flex dark:bg-blue-200  bg-yellow-200 text-sm rounded-lg items-center gap-2 px-2 py-1 dark:text-blue-600 text-yellow-600"
          >
            <i className="bi bi-pencil-fill"></i>
            {t("edit")}
          </button>
        )}
        <button
          type="button"
          onClick={() => handleRemoveItem(id)}
          className="flex items-center dark:bg-blue-200 text-sm  bg-yellow-200 rounded-lg gap-2 px-2 py-1 dark:text-blue-600 text-yellow-600"
        >
          <i className="bi bi-trash-fill"></i>
          {t("remove")}
        </button>
      </div>
    </div>
  ) : null;
}

export default ListItem;
