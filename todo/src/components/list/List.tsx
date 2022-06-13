import React from "react";
import { useTranslation } from "react-i18next";
import { IListItem } from "../../types/listTypes/listItem";
import ListItem from "./ListItem";

export interface ListProps {
  list: IListItem[];
  handleEditItem: (newItem: IListItem) => void;
  handleRemoveItem: (itemId?: string) => void;
  handleToggleItem: (itemId?: string) => void;
}

function List({
  list,
  handleEditItem,
  handleRemoveItem,
  handleToggleItem,
}: ListProps) {
  const { t } = useTranslation();
  return list && list.length > 0 ? (
    <div className="list_content w-full flex flex-col gap-2">
      {list.map((item: IListItem) => {
        return (
          <ListItem
            handleEditItem={handleEditItem}
            handleRemoveItem={handleRemoveItem}
            handleToggleItem={handleToggleItem}
            listItem={item}
            key={item.id}
          ></ListItem>
        );
      })}
    </div>
  ) : (
    <div className="flex items-center justify-center font-semibold">
      <span>{t("emptyList")}</span>
    </div>
  );
}

export default List;
