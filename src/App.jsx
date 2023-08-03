import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container m-auto">
        <p>I am a cookbook!</p>
        <button onClick={() => setCount((c) => c + 1)} className="border rounded shadow p-2 hover:bg-slate-200">
          Count: {count}
        </button>
      </div>
    </>
  );
}

export default App;
