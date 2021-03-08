import React, { useState } from "react";

import Counter from "react-native-counters";

function ItemCounter({ item, increment, decrement }) {
  const [counter, setCounter] = useState(item.quantity);

  const handleCounter = (number, type) => {
    console.log(`${number}, ${type}`);
    if (type === "-") {
        console.log("yo");
      decrement(item);
      setCounter(counter - 1);
    } else {
      increment(item);
      setCounter(counter + 1);
    }
  };
  return (
    <>
      <Counter
        buttonStyle={{
          borderColor: "#333",
          borderWidth: 2,
          borderRadius: 25,
        }}
        buttonTextStyle={{
          color: "#333",
        }}
        countTextStyle={{
          color: "#333",
        }}
        start={counter}
        onChange={handleCounter}
      />
    </>
  );
}

export default ItemCounter;
