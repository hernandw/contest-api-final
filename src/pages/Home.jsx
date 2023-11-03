import { useContext } from "react"
import { MyContext } from "../context/MyContext"
import Product from "../components/Product"


const Home = () => {

    const {products} = useContext(MyContext)
  return (
    <div>
      <h1>Home</h1>

      <div className="products__container">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Home
