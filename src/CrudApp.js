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

  const deleElem = (index) => {
    dataSet.splice(index, 1);
    setDataSet([...dataSet]);
    console.log(index);
    console.log("clicked");
    console.log(dataSet);
  };

  return (
    <div>
      <button onClick={insertData}>
        <input type="text" onChange={handelInputChange} />
        Insert Data
      </button>
      <button></button>

      {dataSet.map((item, index) => (
        <div key={index}>
          <h1>
            {item}
            {index}
          </h1>
          <h1>
            <button onClick={IncreaseCount}>{count} </button>
            <button
              onClick={() => {
                deleElem(index);
              }}
            >
              Delete
            </button>
          </h1>
        </div>
      ))}
    </div>
  );
};
