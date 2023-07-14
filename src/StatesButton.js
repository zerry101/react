import { useState } from "react";




export function StatesButton() {
    const increaseAge = () => {
        setAge(age + 1)
    }
    const [age, setAge] = useState(0);
    return (
        <div>
            {age}<button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}


