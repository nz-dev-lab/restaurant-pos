import React from "react";

interface OrderActionsProps {
  orderType: "Takeaway" | "Dine-in" | "Delivery" | "Collection";
}

const OrderActions: React.FC<OrderActionsProps> = ({ orderType }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Order Details</h3>

      {/* Customer Name Field */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter customer name"
        />
      </div>

      {/* Dine-in Table Selection (Will be implemented later) */}
      {orderType === "Dine-in" && (
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700">Select Table</label>
          <select className="w-full p-2 border rounded-md">
            <option value="">Select a table</option>
            <option value="T1">Table 1</option>
            <option value="T2">Table 2</option>
          </select>
        </div>
      )}

      {/* Delivery Information */}
      {orderType === "Delivery" && (
        <>
          <input type="text" className="w-full p-2 border rounded-md mb-2" placeholder="Enter Address" />
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Contact Number" />
        </>
      )}

      {/* Collection Contact Info */}
      {orderType === "Collection" && (
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Contact Number" />
      )}
    </div>
  );
};

export default OrderActions;
