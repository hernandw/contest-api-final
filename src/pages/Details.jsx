import { useContext } from "react"
import { useParams } from "react-router-dom"
import { MyContext } from "../context/MyContext"


const Details = () => {

  const { products } = useContext(MyContext)
  const {id} = useParams()
  const productFiltrado = products.filter(product => product.id === parseInt(id))

  
  return (
    <div>
      {productFiltrado.map((product) => (
        <div className="card" key={product.id}>
          <img className="image" src={product.image} alt="" />
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Details
