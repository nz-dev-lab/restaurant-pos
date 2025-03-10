import React, { useState } from "react";
import TakeAwayDetails from "./TakeAwayDetails";
import DineInDetails from "./DineInDetails";
import DeliveryDetails from "./DeliveryDetails";

interface OrdersActionsProps {
    orderType: "Takeaway" | "Dine-in" | "Delivery" | "Collection";
}

const OrdersActions: React.FC<OrdersActionsProps> = ({ orderType }) => {
    const [selectedTable, setSelectedTable] = useState<number | null>(null);

    const extraFields: Record<string, React.ReactNode> = {
        Takeaway: <TakeAwayDetails />,
        "Dine-in": <DineInDetails onTableSelect={setSelectedTable} selectedTable={selectedTable} />,
        Delivery: <DeliveryDetails />,
        Collection: <input type="text" placeholder="Enter Customer Name" className="border p-2 rounded text-sm" />,
    };

    return (
        <div key={orderType} className={`flex flex-col p-2 w-full ${orderType === "Dine-in" ? "items-center justify-center" : ""}`}>
            <span className="text-sm font-semibold text-gray-700 pb-2">
                Order Type: <span className="text-gray-900">{orderType}</span>
            </span>
            {extraFields[orderType]}

            <div className="flex justify-around w-full flex-wrap mt-2">
                <button className="bg-gray-900 p-2 rounded text-white font-semibold text-xs hover:cursor-pointer">Save & Print</button>
                <button className="bg-gray-900 p-2 rounded text-white font-semibold text-xs hover:cursor-pointer">Payment</button>
                <button className="bg-gray-900 p-2 rounded text-white font-semibold text-xs hover:cursor-pointer">Settle Bill</button>
            </div>
        </div>
    );
};

export default OrdersActions;
