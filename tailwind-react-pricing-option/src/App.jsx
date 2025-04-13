import { Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";
import PricingOption from "./components/PricingOption/PricingOption";

function App() {
  const pricingPromise = fetch("pricing.json").then((res) => res.json());
  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<p>Loading...</p>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>
    </>
  );
}

export default App;
