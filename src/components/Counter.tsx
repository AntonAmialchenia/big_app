import { FC, useState } from "react";

import classes from "./counter.module.scss";

interface CounterProps {}

export const Counter: FC<CounterProps> = ({}) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        className={classes.button}
        onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
      <button
        className={classes.button}
        onClick={() => setCount((prev) => prev - 1)}>
        -
      </button>
    </div>
  );
};
