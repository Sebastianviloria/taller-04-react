import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="counter-section">
      <h2>¿Cuántos estudiantes van a inscribirse?</h2>
      <p className="counter-subtitle">Usa los botones para ajustar el número</p>
      <div className="counter-box">
        <button
          className="counter-btn"
          onClick={() => setCount(count - 1)}
        >
          −
        </button>
        <span className="counter-value">{count}</span>
        <button
          className="counter-btn"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
      <p className="counter-label">estudiantes inscritos</p>
    </section>
  );
}

export default Counter;