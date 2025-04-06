import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="">
      <Header />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
