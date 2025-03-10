// OrderItems.tsx
import React, { useState } from "react";

interface MenuItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  notes: string;
}

const OrderItems: React.FC = () => {
  const [orderItems, setOrderItems] = useState<MenuItem[]>([
    { id: 1, title: "Grilled Chicken", price: 10.99, quantity: 1, notes: "" },
    { id: 2, title: "Mandi Rice", price: 5.99, quantity: 1, notes: "" },
  ]);

  const handleQuantityChange = (id: number, increment: boolean) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: increment ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleNotesChange = (id: number, notes: string) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, notes } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 space-y-4">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2 px-4">Item</th>
            <th className="text-left py-2 px-4">Notes</th>
            <th className="text-left py-2 px-4">Quantity</th>
            <th className="text-left py-2 px-4">Price</th>
            <th className="text-left py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-4">{item.title}</td>

              {/* Notes */}
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={item.notes}
                  onChange={(e) => handleNotesChange(item.id, e.target.value)}
                  placeholder="Add notes"
                  className="px-2 py-1 border rounded-md w-full"
                />
              </td>

              {/* Quantity Controls */}
              <td className="py-2 px-4 flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, false)}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, true)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
              </td>

              {/* Price */}
              <td className="py-2 px-4">${(item.price * item.quantity).toFixed(2)}</td>

              {/* Remove Item */}
              <td className="py-2 px-4">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Price */}
      <div className="flex justify-end mt-4">
        <span className="font-bold">Total: ${calculateTotalPrice().toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderItems;
