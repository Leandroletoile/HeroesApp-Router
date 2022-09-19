import { useState } from "react";

export const useCounter = () => {

    const [counter, setCounter] = useState(1);

    if (counter < 1) setCounter(1)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const reset = () => {
        setCounter(1);
    }
    const decrement = (value = 1) => {
        setCounter(counter - value);
    }

    return {
        counter,
        increment,
        reset,
        decrement,
        setCounter
    }
}