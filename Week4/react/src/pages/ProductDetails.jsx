import { useParams, Link } from "react-router-dom";
import { products } from "../data";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="text-center text-red-500">Product Not Found</h2>;

  return (
    <section className="container mx-auto py-10 text-center">
      <img src={product.img} alt={product.name} className="mx-auto mb-4" />
      <h2 className="text-3xl font-semibold">{product.name}</h2>
      <p className="text-gray-600 text-lg">{product.description}</p>
      <p className="text-2xl font-bold mt-2">{product.price}</p>
      <Link to="/" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Back to Products
      </Link>
    </section>
  );
}

export default ProductDetails;
