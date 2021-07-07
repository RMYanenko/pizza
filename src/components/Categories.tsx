import React from "react";

interface CategoriesProps {
  items: Array<string>;
}

export const Categories = ({ items }: CategoriesProps): JSX.Element => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((item, index) => (
          <li key={`${item}_${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
