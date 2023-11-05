
import { useTheme } from "next-themes";
import ToggleButton from "./ToggleButton";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
      >
        <ToggleButton></ToggleButton>
      </button>
    </>
  );
}

export default ThemeToggle;
