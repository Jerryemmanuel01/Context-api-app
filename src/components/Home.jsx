import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className="home">
       {/* <Filters /> */}
       <div className="productContainer">
        {
          products.map((product) => (
            <SingleProduct  product={product} key={product.id}/>
          ))
        }
       </div>
    </div>
  )
}

export default Home
