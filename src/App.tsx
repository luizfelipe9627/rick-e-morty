import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ThemeContextProvider>
        <main>
          <AppRoutes />
        </main>
      </ThemeContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
