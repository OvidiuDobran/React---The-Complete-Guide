import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    title: "Toilet paper",
    price: 5,
    description: "Soft toilet paper!",
  },
  {
    title: "Toothpaste",
    price: 4,
    description: "Recommended by 9/10 dentists!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((prod, index) => (
          <ProductItem
            key={index + prod.title}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
