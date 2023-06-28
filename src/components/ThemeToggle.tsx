import { useEffect, useState } from "react";
import { Icons } from "./Icons";

export default function ThemeToggle() {
  const THEME_KEY = "theme";
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_KEY) ?? "white"
  );
  const [isMounted, setIsMounted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const themeToggle = () => setTheme(theme === "white" ? "dark" : "white");

  useEffect(() => {
    setIsChanging(true);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
    // Setting a timeout so the animation can actually be seen
    setTimeout(() => {
      setIsChanging(false);
    }, 100);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Icons.spinner className="animate-spin" aria-label="Initializing theme" />
    );
  }
  return (
    <a
      className={
        "cursor-pointer" + (isChanging && theme == "white" && " animate-spin")
      }
      onClick={themeToggle}
    >
      {theme === "white" ? <Icons.sun /> : <Icons.moon />}
    </a>
  );
}
