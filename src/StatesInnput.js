import React, { useState, useEffect } from 'react';

export function StatesInput() {

    const [Inputvalue, SetInputValue] = useState("");

    const [showText, SetShowText] = useState(true);

    const handleShowText = () => {
        SetShowText(!showText);
    }

    const handleInputValue = (event) => {
        SetInputValue(event.target.value);
    }

    return (
        <div>
            <p>
                <input type="text" onChange={handleInputValue} value={Inputvalue} />
            </p>
            <button onClick={handleShowText}>
                Show/Hide
            </button>
            {showText && <p>{Inputvalue}</p>}
        </div>
    )
}