import React from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Woman's Fashion", hasArrow: true },
  { name: "Men's Fashion", hasArrow: true },
  { name: "Electronics", hasArrow: false },
  { name: "Home & Lifestyle", hasArrow: false },
  { name: "Medicine", hasArrow: false },
  { name: "Sports & Outdoor", hasArrow: false },
  { name: "Baby's & Toys", hasArrow: false },
  { name: "Groceries & Pets", hasArrow: false },
  { name: "Health & Beauty", hasArrow: false },
];

const Sidebar = () => {
  return (
    <div className="w-64 border-r p-5">
      <ul className="space-y-4">
        {categories.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between cursor-pointer hover:text-gray-600"
          >
            <span>{item.name}</span>
            {item.hasArrow && <ChevronRight size={16} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;