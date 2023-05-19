import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  const preferDarkQuery = "(prefer-color-scheme:dark)";

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("@portfolio-theme");

    const handleChange = () => {
      if (userPref) {
        const check = userPref === "dark" ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } 
      // else {
      //   const check = mediaQuery.matches ? "dark" : "light";
      //   setMode(check);

      //   if (check === "dark") {
      //     document.documentElement.classList.add("dark");
      //   } else {
      //     document.documentElement.classList.remove("dark");
      //   }
      // }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {    
    window.localStorage.setItem("@portfolio-theme", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
