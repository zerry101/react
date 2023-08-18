import { useState } from "react";

export function StatesButton() {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      {age}
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}
