import React from "react";

interface ThemeContextProps {
  theme: string;
  updateTheme: (newTheme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme deve estar dentro do ThemeContextProvider");
  }

  return context;
};

export const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

  if (theme) {
    const isDarkTheme = theme === "dark";
    document.body.classList.toggle("dark", isDarkTheme);
  }

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  React.useEffect(() => {
    const buttonDark = document.querySelector(
      ".buttonDark",
    ) as HTMLButtonElement;
    const buttonLight = document.querySelector(
      ".buttonLight",
    ) as HTMLButtonElement;

    const darkClickHandler = () => updateTheme("dark");
    const lightClickHandler = () => updateTheme("light");

    buttonDark?.addEventListener("click", darkClickHandler);
    buttonLight?.addEventListener("click", lightClickHandler);

    return () => {
      buttonDark?.removeEventListener("click", darkClickHandler);
      buttonLight?.removeEventListener("click", lightClickHandler);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
