import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./pages/Homepage/Homepage";
import Recipe from "./components/Recipe"

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Homepage />
        <Footer />
        <Recipe/>
      </div>
    </>
  );
}

export default App;