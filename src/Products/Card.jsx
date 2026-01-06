import StarRating from "./StarRating";

export default function Card({ product, setShowModal, setSelectedProduct }) {
  return (
    <div className=" w-64 bg-white rounded-xl shadow-md border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-gray-500 flex flex-col justify-between">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800 ">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">{product.description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold text-lg">
            ${product.price}
          </span>

          <div className="flex gap-1 items-center text-sm font-medium">
            <StarRating value={product.rating} />
            <span>{product.rating}</span>
          </div>
        </div>
        <button
          onClick={() => { setSelectedProduct(product); setShowModal(true); }}
          className="text-blue-600 text-xs underline underline-offset-2 hover:text-blue-400 transition-colors">
          view reviews
        </button>
      </div>
    </div>
  );
}
