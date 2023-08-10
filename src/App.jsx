import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Homepage />
      </div>
      <Footer />
    </>
  );
}

export default App;
