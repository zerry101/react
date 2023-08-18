import { useState } from "react";

export const CrudApp = () => {
  const [count, setCount] = useState(0);

  const [dataSet, setDataSet] = useState(["Zishan", "Adnan", "Sajjad"]);
  const [inputValue, SetInputValue] = useState("");
  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const insertData = () => {
    setDataSet([...dataSet, inputValue]);
    console.log([...dataSet, inputValue]);
  };

  const handelInputChange = (event) => {
    SetInputValue(event.target.value);
  };

  return (
    <div>
      <button onClick={insertData}>
        <input type="text" onChange={handelInputChange} />
        Insert Data
      </button>
      {dataSet.map((item, index) => (
        <div key={index}>
          <h1>
            {item}
            {index}
          </h1>
          <h1>
            <button onClick={IncreaseCount}>{count} </button>
          </h1>
        </div>
      ))}
    </div>
  );
};
