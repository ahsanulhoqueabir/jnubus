import { useEffect } from "react";
import { useState } from "react";

const useThemeControl = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "pastel"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("nord");
    } else {
      setTheme("pastel");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }
  }, [theme]);
  return [theme, handleToggle];
};

export default useThemeControl;
