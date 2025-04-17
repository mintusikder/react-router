import React from "react";
import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name="jojo"></Cousin>
        <Cousin name="tomtom"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
