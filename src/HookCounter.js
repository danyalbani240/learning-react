import { useState } from "react";
const HookCounter = () => {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount((oldVal) => oldVal + 1);
    };
    //there is an issue because it not work as we want;
    // const addFive = () => {
    //     for (let i = 0; i < 5; i++) {
    //         setCount(count + 1);
    //     }
    // };
    //the right way of doing this in react :
    const addFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((oldValue) => oldValue + 1);
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
