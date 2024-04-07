import { CartState } from "../context/Context"

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
            <span>{product.name}</span>
          ))
        }
       </div>
    </div>
  )
}

export default Home
