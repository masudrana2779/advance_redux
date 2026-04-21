import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const d_products = [
  {
    id: "p1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Test2",
    price: 5,
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {d_products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
