import React, { useState } from "react";

interface OrderTypeSelectorProps {
  orderType: "Takeaway" | "Dine-in" | "Delivery" | "Collection";
  setOrderType: (type: "Takeaway" | "Dine-in" | "Delivery" | "Collection") => void;
}

const OrderTypeSelector: React.FC<OrderTypeSelectorProps> = ({ orderType, setOrderType }) => {
  const [selectedGroup, setSelectedGroup] = useState<"orderType" | "deliveryMethod" | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<"Delivery" | "Collection">("Delivery");

  return (
    <div className="w-full p-4 space-y-4">
      {/* Main Tab Group */}
      <div className="flex flex-col space-y-3">
        {/* Order Type (Takeaway / Dine-in) */}
        <div className="flex bg-gray-200 p-1 rounded-lg justify-between">
          <button
            className={`flex-1 py-2 mx-1 text-center font-medium rounded-lg transition ${
              selectedGroup === "orderType" ? "bg-orange-500 text-white" : "bg-white text-gray-800"
            }`}
            onClick={() => setSelectedGroup(selectedGroup === "orderType" ? null : "orderType")}
          >
            {orderType}
          </button>
        </div>

        {/* Delivery Method (Delivery / Collection) */}
        <div className="flex bg-gray-200 p-1 rounded-lg justify-between">
          <button
            className={`flex-1 py-2 mx-1 text-center font-medium rounded-lg transition ${
              selectedGroup === "deliveryMethod" ? "bg-orange-500 text-white" : "bg-white text-gray-800"
            }`}
            onClick={() => setSelectedGroup(selectedGroup === "deliveryMethod" ? null : "deliveryMethod")}
          >
            {deliveryMethod}
          </button>
        </div>
      </div>

      {/* If 'Order Type' is selected, show Takeaway / Dine-in */}
      {selectedGroup === "orderType" && (
        <div className="flex flex-col mt-2">
          <div className="flex items-center mb-2 justify-between">
            <span className="mr-2 font-sans font-semibold">Dine-in</span> 
            <label className="relative inline-block w-16 h-8">
              <input
                type="checkbox"
                checked={orderType === "Takeaway"} 
                onChange={() => setOrderType(orderType === "Takeaway" ? "Dine-in" : "Takeaway")}
                className="sr-only"
              />
              <span className={`absolute inset-0 rounded-full bg-gray-300 transition-all ${orderType === "Takeaway" ? "bg-orange-500" : "bg-gray-500"}`} />
              <span className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-white transition-all ${orderType === "Takeaway" ? "transform translate-x-8" : ""}`} />
            </label>
            <span className="ml-2 font-sans font-semibold">Takeaway</span> 
          </div>
        </div>
      )}

      {/* If 'Delivery Method' is selected, show Collection / Delivery */}
      {selectedGroup === "deliveryMethod" && (
        <div className="flex flex-col mt-2">
          <div className="flex items-center mb-2 justify-between">
            <span className="mr-2 font-sans font-semibold">Collection</span> 
            <label className="relative inline-block w-16 h-8">
              <input
                type="checkbox"
                checked={deliveryMethod === "Delivery"} 
                onChange={() => {
                  setDeliveryMethod(deliveryMethod === "Delivery" ? "Collection" : "Delivery");
                  setOrderType(deliveryMethod === "Delivery" ? "Collection" : "Delivery");
                }}
                className="sr-only"
              />
              <span className={`absolute inset-0 rounded-full bg-gray-300 transition-all ${deliveryMethod === "Delivery" ? "bg-orange-500" : "bg-gray-500"}`} />
              <span className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-white transition-all ${deliveryMethod === "Delivery" ? "transform translate-x-8" : ""}`} />
            </label>
            <span className="ml-2 font-sans font-semibold">Delivery</span> 
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTypeSelector;
