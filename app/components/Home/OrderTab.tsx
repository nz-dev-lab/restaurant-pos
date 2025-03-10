import React, { useState } from 'react';
import CurrentOrder from './CurrentOrder';
import OrderTypeSelector from './OrderTypeSelect';
import CurrentOrderComp from './CurrentOrderComp';
import OrderActions from './OrderActions'; // Bottom section component

const OrderTab: React.FC = () => {
  const [orderType, setOrderType] = useState<"Takeaway" | "Dine-in" | "Delivery" | "Collection">("Takeaway"); // Default is Takeaway

  return (
    <div className="flex flex-1 flex-col overflow-hidden h-full">
      {/* Order Type Selector */}
      <OrderTypeSelector orderType={orderType} setOrderType={setOrderType}/>

      {/* Scrollable Current Order Section */}
      <div className="flex-1 overflow-y-auto p-4">
        <CurrentOrderComp />
      </div>

      {/* Fixed Bottom Actions */}
      <div className=" border-t border-gray-200 min-h-[200px] bg-white fixed bottom-0 w-full">
        <OrderActions orderType={orderType}/>
      </div>
    </div>
  );
};

export default OrderTab;
