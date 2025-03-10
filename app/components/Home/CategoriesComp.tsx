import React from 'react'


const categories = [
    "Burgers",
    "Wraps",
    "Grilled Chicken",
    "Sides",
    "Drinks",
    "Desserts",
    "Long Category Name Example", // Added for testing overflow
    "Another Category Example", // Added for testing overflow
  ];

const CategoriesComp = () => {
  return (
    <div className="flex overflow-x-auto gap-4 mt-3 pb-3 border-b border-gray-200">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-6 py-4 bg-gray-200 font-sans hover:bg-gray-200 text-sm text-gray-900 font-medium rounded-md transition-all min-w-[200px] h-[80px] flex items-center justify-center text-center"
          >
            {category}
          </button>
        ))}
      </div>
  )
}

export default CategoriesComp