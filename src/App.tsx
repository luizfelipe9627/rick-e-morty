import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme] = useTheme();
  
  if (theme) {
    const isDarkTheme = theme === "dark";
    document.body.classList.toggle("dark", isDarkTheme);
  }

  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
