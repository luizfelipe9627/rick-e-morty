import React from "react";

const useTheme = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light",
  );

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

  return { theme, updateTheme };
};

export default useTheme;
