import { Link } from "react-router-dom";
import { products } from "../data";

function Products() {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-lg text-center">
            <img src={product.img} alt={product.name} className="mx-auto mb-3" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
