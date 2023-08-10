import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./pages/Homepage/Homepage";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Homepage />
        <Recipe />
      </div>
      <Footer />
    </>
  );
}

export default App;
