import React from "react";
import { useCountdown } from "../Hooks/useCountdown";
import ProductGrid from "./ProductGrid";

const FlashSales = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="px-25 mt-20">
      <div className="flex gap-2 items-center">
        <div className="w-3 h-6 bg-red-500 rounded-sm"></div>
        <p className="text-red-600 font-semibold">Today's</p>
      </div>

      <div className="flex items-center gap-12 mt-4">
        <h2 className="text-4xl font-bold">Flash Sales</h2>

        <div className="flex gap-6">
          <div>
            <p className="text-xs">Days</p>
            <p className="text-2xl font-bold">{String(days).padStart(2, "0")}</p>
          </div>
          <div>
            <p className="text-xs">Hours</p>
            <p className="text-2xl font-bold">{String(hours).padStart(2, "0")}</p>
          </div>
          <div>
            <p className="text-xs">Minutes</p>
            <p className="text-2xl font-bold">{String(minutes).padStart(2, "0")}</p>
          </div>
          <div>
            <p className="text-xs">Seconds</p>
            <p className="text-2xl font-bold">{String(seconds).padStart(2, "0")}</p>
          </div>
        </div>
      </div>
      <ProductGrid />
    </div>
  );
};

export default FlashSales;  