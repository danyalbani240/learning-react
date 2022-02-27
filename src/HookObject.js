import { useState } from "react";

const HookObject = () => {
    const [userData, setData] = useState({
        firstName: "",
        lastName: "",
    });
    const firstNameHandler = (e) => {
        //tuturials way
        setData({ ...userData, firstName: e.target.value });
    };
    const lastNameHandler = (e) => {
        //my way :

        setData({ firstName: userData.firstName, lastName: e.target.value });
    };
    // any way in the end tuturials way is better
    return (
        <form>
            <input
                type="text"
                value={userData.firstName}
                onChange={firstNameHandler}
            ></input>
            <input
                type="text"
                value={userData.lastName}
                onChange={lastNameHandler}
            ></input>
            <p>{userData.firstName}</p>
            <p>{userData.lastName}</p>
        </form>
    );
};

export default HookObject;
