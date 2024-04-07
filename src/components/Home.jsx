import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProduct = products;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>(
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      ));
    }

    return sortedProduct
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
