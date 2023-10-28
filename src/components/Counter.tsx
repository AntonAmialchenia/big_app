import { FC, useState } from "react";

import "./counter.scss";

interface CounterProps {}

export const Counter: FC<CounterProps> = ({}) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
};
