import React, { useState, useEffect } from "react";

function Counter({ Value }) {
  const [count, setCount] = useState(Value);//statimi oluşturdum
  useEffect(() => {
    const sayıyıkaydet = localStorage.getItem("count");
    if (sayıyıkaydet) {
      setCount(Number(sayıyıkaydet)); 
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  const arttır = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    setCount(count - 1);
  };
  const sıfırla = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", fontSize: "30px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={arttır} 
      style={{
        fontSize: 30,
        backgroundColor: 'rgb(173, 216, 230)', 
        color: 'black',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        marginRight: '10px', 
        cursor: 'pointer',
      }}>+</button>
      <button onClick={azalt} 
      style={{
        fontSize: 30,
        backgroundColor: 'rgb(173, 216, 230)',
        color: 'black',
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        marginRight: '10px', 
        cursor: 'pointer',
       
      }}>-</button>
      <button onClick={sıfırla} 
      style={{
          fontSize: 30,
          backgroundColor: 'rgb(255, 99, 71)',
          color: 'black',
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          marginRight: '10px', 
          cursor: 'pointer',
       
        }}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>MY COUNTER</h2>
      <Counter Value={0} />
    </div>
  );
}

export default App;
