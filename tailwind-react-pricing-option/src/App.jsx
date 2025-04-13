import { Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";
import PricingOption from "./components/PricingOption/PricingOption";
import Chart from "./components/Chart/Chart";
import axios from "axios";
import MarkChart from "./components/MarkChart/MarkChart";

function App() {
  const pricingPromise = fetch("pricing.json").then((res) => res.json());
  const marksPromise = axios.get("marks.json");
  return (
    <div>
      <NavBar></NavBar>
      <Suspense fallback={<p>Loading...</p>}>
        <PricingOption pricingPromise={pricingPromise}></PricingOption>
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <MarkChart marksPromise={marksPromise}></MarkChart>
      </Suspense>
      <Chart></Chart>
    </div>
  );
}

export default App;
