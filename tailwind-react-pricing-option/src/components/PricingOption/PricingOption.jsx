import React, { use } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PricingOption = ({ pricingPromise }) => {
  const pricing = use(pricingPromise);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12">
        {pricing.map((prices) => (
          <PriceCard key={prices.id} prices={prices}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
