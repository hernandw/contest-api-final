import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product }) => {
const navigate = useNavigate()

  return (
    <div className="card" key={product.id}>
      <img onClick={() => navigate(`/product/${product.id}`)} className="image" src={product.image} alt="" />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product;
