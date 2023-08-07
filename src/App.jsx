import { useState } from "react";
import Header from './Header'
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container m-auto">
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
