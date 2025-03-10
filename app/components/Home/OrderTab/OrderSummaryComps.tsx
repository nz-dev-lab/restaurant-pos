import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Popover } from "react-tiny-popover";
import { faTag, faTruck, faClock } from "@fortawesome/free-solid-svg-icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface OrderSummaryProps {
  orderType: "Takeaway" | "Dine-in" | "Delivery" | "Collection";
  totalAmount: number;
}

const OrderSummaryComps: React.FC<OrderSummaryProps> = ({ orderType, totalAmount }) => {
  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [scheduledTime, setScheduledTime] = useState("");

  const discountAmount = (totalAmount * discount) / 100;
  const finalTotal = totalAmount + deliveryCharge - discountAmount;

  return (
    <div className="flex w-full h-10 items-center bg-orange-600 p-2">
      {/* Left: Bill Number */}
      <div className="flex items-center">
        <span className="text-md font-sans font-bold text-white">Bill No:</span>
      </div>

      {/* Center: Discount & Delivery Icons */}
      <div className="flex flex-1 justify-center gap-4">
        {/* Discount Popover */}
        <Popover
          isOpen={isDiscountOpen}
          positions={["top", "left"]}
          onClickOutside={() => setIsDiscountOpen(false)}
          containerStyle={{ zIndex: "50" }}
          content={
            <div className="bg-white shadow-lg p-2 rounded-md w-40 border z-50">
              <button
                onClick={() => { setDiscount(10); setIsDiscountOpen(false); }}
                className="p-2 w-full hover:bg-gray-200 text-left"
              >
                10% Off
              </button>
              <button
                onClick={() => { setDiscount(20); setIsDiscountOpen(false); }}
                className="p-2 w-full hover:bg-gray-200 text-left"
              >
                20% Off
              </button>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="number"
                  placeholder="Custom %"
                  className="w-16 text-center border rounded p-1"
                  onChange={(e) => setDiscount(Number(e.target.value))}
                />
                <button
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  onClick={() => setIsDiscountOpen(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          }
        >
          <button className="text-white" onClick={() => setIsDiscountOpen(!isDiscountOpen)}>
            <FontAwesomeIcon size="lg" icon={faTag as IconProp} />
          </button>
        </Popover>

        {/* Delivery Charge Popover (Only for Delivery orders) */}
        {orderType === "Delivery" && (
          <>
            <Popover
              isOpen={isDeliveryOpen}
              positions={["top", "left"]}
              onClickOutside={() => setIsDeliveryOpen(false)}
              containerStyle={{ zIndex: "50" }}
              content={
                <div className="bg-white shadow-lg p-2 rounded-md w-40 border z-50">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Enter Charge"
                      className="w-16 text-center border rounded p-1"
                      onChange={(e) => setDeliveryCharge(Number(e.target.value))}
                    />
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => setIsDeliveryOpen(false)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              }
            >
              <button className="text-white" onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}>
                <FontAwesomeIcon size="lg" icon={faTruck as IconProp} />
              </button>
            </Popover>

            {/* Scheduled Delivery Time Popover */}
            <Popover
              isOpen={isTimeOpen}
              positions={["top", "left"]}
              onClickOutside={() => setIsTimeOpen(false)}
              containerStyle={{ zIndex: "50" }}
              content={
                <div className="bg-white shadow-lg p-2 rounded-md w-40 border z-50">
                  <label className="block text-sm font-medium text-gray-700">Select Time:</label>
                  <input
                    type="time"
                    className="border p-1 rounded w-full mt-1"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                  />
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded w-full mt-2 hover:bg-blue-700"
                    onClick={() => setIsTimeOpen(false)}
                  >
                    Confirm
                  </button>
                </div>
              }
            >
              <button className="text-white" onClick={() => setIsTimeOpen(!isTimeOpen)}>
                <FontAwesomeIcon size="lg" icon={faClock as IconProp} />
              </button>
            </Popover>
          </>
        )}
      </div>

      {/* Right: Total Amount */}
      <div className="flex min-w-[25%]">
        <span className="text-md font-sans font-bold text-white">
          Total: £{finalTotal.toFixed(2)} {discount > 0 || deliveryCharge > 0 ? `(Updated)` : ""}
        </span>
      </div>
    </div>
  );
};

export default OrderSummaryComps;
