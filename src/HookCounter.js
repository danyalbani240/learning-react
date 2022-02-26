import { useState } from "react";
const HookCounter = () => {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    };

    const addFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
        }
    };

    return (
        <div className="hook-counter">
            <h2>count - {count}</h2>
            <button onClick={addOne}>addOne</button>
            <button onClick={addFive}>addFive</button>
        </div>
    );
};
export default HookCounter;
