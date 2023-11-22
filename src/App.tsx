import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <main className="container">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
