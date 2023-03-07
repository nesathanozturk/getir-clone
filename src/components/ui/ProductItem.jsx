import { FiPlus } from "react-icons/fi";

function ProductItem({ product }) {
  return (
    <div className="bg-white flex flex-col gap-y-1 relative p-3 items-center text-center text-sm font-semibold">
      <button className="bg-white absolute top-3 right-3 w-8 h-8 flex items-center justify-center border-gray-200 rounded-lg text-brand-color shadow-md">
        <FiPlus size={15} />
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-brand-color">{product.price}</div>
      <div className="text-gray-900">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
}

export default ProductItem;
