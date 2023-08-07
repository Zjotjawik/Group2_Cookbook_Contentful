import { useState } from "react";
import Header from './Header'
import Footer from "./Footer";
import Recipe from "./components/Recipe"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container m-auto">
        <Header />
        <Footer />
      </div>
      <Recipe/>
    </>
  );
}

export default App;
