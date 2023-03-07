import { useState, useEffect } from "react";
import categoryData from "../api/categories.json";
import CategoryItem from "./ui/CategoryItem";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-gray-50 md:bg-white py-4 shadow">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-1 px-6 md:px-5">Kategoriler</h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {categories &&
            categories.map((category, index) => (
              <CategoryItem key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
