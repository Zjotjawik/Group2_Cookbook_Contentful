import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import SearchResults from "./pages/SearchResults";
import Recipe from "./components/Recipe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="bg-white pt-8 py-12">
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            {/* <Route path="/categories" element={<Categories />} /> */}
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
