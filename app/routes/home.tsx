import { useState } from "react";
import type { Route } from "./+types/home";
import Sidebar from "~/components/Home/Sidebar";
import Header from "~/components/Home/Header";
import OrderTab from "~/components/Home/OrderTab";
import MenuContainer from "~/components/Home/MenuContainer";
import OrderTabSection from "~/components/Home/OrderTab/OrderTabSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [isOrderListVisible, setIsOrderListVisible] = useState(false);

  return (
    <main className="flex h-screen w-full overflow-hidden">
      {/* Sidebar - Fixed */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="w-[67%] min-w-[67%] h-screen flex flex-col drop-shadow">
        <Header />
        
        {/* Scrollable Content Wrapper */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {/* Menu Header */}
          <div className="w-full flex justify-between items-center py-2">
            <h2 className="text-lg font-sans font-semibold">Menu</h2>
          </div>
          {/* Menu Items */}
          <MenuContainer />

          {/* Order List Header */}
          {/* <div className="w-full flex justify-between items-center py-2">
            <h2 className="text-lg font-sans font-semibold">Order Lists</h2>
            <button
              onClick={() => setIsOrderListVisible(!isOrderListVisible)}
              className="px-4 py-2 bg-orange-500 text-white rounded-md"
            >
              {isOrderListVisible ? "Hide" : "Show"}
            </button>
          </div> */}

          {/* Order List Container (Collapsible) */}
          {/* <div
            className={`w-full shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
              isOrderListVisible ? "h-[200px]" : "h-0"
            }`}
          >
            Order List
          </div> */}
        </div>
      </div>

      {/* OrderTab - Fixed */}
      <OrderTabSection />
    </main>
  );
}
