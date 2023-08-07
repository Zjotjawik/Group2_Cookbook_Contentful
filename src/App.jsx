import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}

export default App;
