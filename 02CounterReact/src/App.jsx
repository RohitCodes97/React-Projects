import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    /* setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1); */

    //* Interview question: what will happen if setCount(count + 1); function is called mutiple times.
    //* Answer: It will return same as only one count function because of the concept of batching.
    // ! Now to increment the counter in order of 4 we do the trick
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    // setCount(count - 1);
    if (count > 0) {
      setCount((prevCounter) => prevCounter - 1);
      setCount((prevCounter) => prevCounter - 1);
      setCount((prevCounter) => prevCounter - 1);
      setCount((prevCounter) => prevCounter - 1);
    }
  };
  return (
    <>
      <h1>Counter Value: {count}</h1>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {count}</p>
    </>
  );
}

export default App;
