import { Categories, PizzaBlock, SortPopup } from "../components";
import { PizzaInterface } from "../interfaces/PizzaProps";

interface IProps {
  items: PizzaInterface[];
}

export const Home = (props: IProps): JSX.Element => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
          />
          <SortPopup items={["популярности", "цене", "алфавиту"]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            props.items.map((item) => <PizzaBlock key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} category={item.category} />)
          }
        </div>
      </div>
    </div>
  );
};
