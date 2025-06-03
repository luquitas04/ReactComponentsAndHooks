import { useTheme } from "../theme/hook/useTheme";
import styles from "./SwitchTheme.module.scss";

const SwitchTheme = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default SwitchTheme;