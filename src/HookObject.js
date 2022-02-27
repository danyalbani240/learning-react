import { useState } from "react";

const HookObject = () => {
    const [userData, setData] = useState({
        firstName: "",
        lastName: "",
    });
    const changeHandler = (e) => {};
    return (
        <form>
            <input
                type="text"
                value={userData.firstName}
                onChange={changeHandler}
            ></input>
            <input
                type="text"
                value={userData.lastName}
                onChange={changeHandler}
            ></input>
        </form>
    );
};

export default HookObject;
