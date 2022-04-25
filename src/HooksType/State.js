import React from "react";        // default imported
import { useState } from "react";  // named imported

function State() {
    const [name, setName] = useState("Abhishek Singh");
    const [user, setUser] = useState({ name: "Abhishek Singh", age: 26 })

    // returns a state variable and a function using which you can update the state value because we do not have setState function
    // in functional components., Also it will take the initial value of the state variables.

    // named function : variable whose is equal to a function 
    // const updateState = function()

    // }

    // arrow function 
    const updateState = () => {
        setName("Ayush Singh");
    }

    const updateObjState = () => {
        setUser((prevState) => ({
            ...prevState,
            name: 'Ayush Singh',
            age: 17,
        }));
    }

    return (
        <>
            <h1>--------*Understanding Hooks*--------</h1>
            <h2>useState , useEffect  and  useContext</h2>
            <h2>useReducer , useCallback , useMemo , memo , useRef</h2>
            <p>State variable name : {name} </p>
            <button onClick={updateState}>Click to update state varibale</button>
            <br />
            <br />
            <button onClick={() => setName("Full-Stack Developer")}>Click to update the state variable using arrow function</button>
            <p>State as an Object: {user.name}</p>
            <p>State as an Object: {user.age}</p>
            <button onClick={updateObjState}>Click to update object state variable value</button>
        </>
    )
}
export default State;


// useState
// defination , structure
// how to use the state variable in dom
// update the state variable => by creating a seperate function and by writing in the same line
// prevState

