import { Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";
import PricingOption from "./components/PricingOption/PricingOption";
import Chart from "./components/Chart/Chart";

function App() {
  const pricingPromise = fetch("pricing.json").then((res) => res.json());
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback={<p>Loading...</p>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
      <Chart></Chart>
    </div>
  );
}

export default App;
