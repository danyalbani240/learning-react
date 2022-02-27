import { useState } from "react";
const HookArray = () => {
    const [item, setItem] = useState([]);
    const addNumber = () => {
        //my way for updating it and tuturials way
        let mine = Math.random();
        setItem([...item, mine]);
    };
    return (
        <div>
            <ul>
                {item.map((num) => {
                    return <li>{num}</li>;
                })}
            </ul>
            <button onClick={addNumber}>addItem</button>
        </div>
    );
};
export default HookArray;
