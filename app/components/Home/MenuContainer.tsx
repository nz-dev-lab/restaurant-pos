import React, { Suspense, lazy } from "react";
import CategoriesComp from "./CategoriesComp";

// Lazy load MenuItemsComp
const MenuItemsComp = lazy(() => import("./MenuItemsComp"));

const LoadingSkeleton = () => (
  <div className="bg-gray-200 rounded-lg shadow-md w-[190px] h-[170px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 p-4 animate-pulse">
    <div className="bg-gray-300 rounded w-3/4 h-6 mb-2"></div> {/* Loading title */}
    <div className="bg-gray-300 rounded w-1/2 h-6"></div> {/* Loading price */}
  </div>
);

const MenuContainer = () => {
  return (
    <div className="w-[96%] min-h-[500px] flex-1 flex flex-col shadow-md p-4 bg-white rounded-lg">
      {/* Categories Section with horizontal scrolling */}
      <CategoriesComp />

      {/* Menu Items section */}
      <Suspense fallback={<div className="flex gap-4 flex-wrap">
        {[...Array(4)].map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>}>
        <MenuItemsComp />
      </Suspense>
    </div>
  );
};

export default MenuContainer;
