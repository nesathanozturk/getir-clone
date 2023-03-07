import { useState, useEffect } from "react";
import categoryData from "../api/categories.json";
import CategoryItem from "./ui/CategoryItem";
import Title from "./ui/Title";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4 shadow">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-10">
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
