import React, { useState, useEffect } from "react";

function Counter({value,adım=1 }) {//adım sayısı değiştirilebilir
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved !== null ? Number(saved) : value;
  });
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  const arttır = () => setCount(count + adım);
  const azalt = () => setCount(count - adım);
  const sıfırla = () => setCount(0);
  return (
    <div style={{ textAlign: "center", fontSize: "30px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={arttır}
        style={buttonStyle}>+</button>
      <button onClick={azalt}
        style={buttonStyle}>-</button>
      <button onClick={sıfırla}
        style={{ ...buttonStyle, backgroundColor: 'rgb(255, 99, 71)' }}>Reset</button>
    </div>
  );
}
const buttonStyle = {
  fontSize: 30,
  backgroundColor: 'rgb(173, 216, 230)',
  color: 'black',
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  marginRight: '10px',
  cursor: 'pointer',
};
export default Counter;
