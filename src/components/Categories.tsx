import React from "react";

interface CategoriesProps {
  items: Array<string>;
  onClickItem: (item: string) => void;
}

export const Categories = ({
  items,
  onClickItem,
}: CategoriesProps): JSX.Element => {
  const [activeItem, setActiveItem] = React.useState<number | null>();

  const onSelectItem = (index: number | null) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items && items.map((item, index) => (
          <li
            className={activeItem === index ? "active" : ""}
            onClick={() => onSelectItem(index)}
            key={`${item}_${index}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
