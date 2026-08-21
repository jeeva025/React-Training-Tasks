function ThemeToggle({ isDark, setIsDark }) {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="theme-section">
      <button className="theme-button" onClick={toggleTheme}>
        {isDark ? "☀️ Light Theme" : "🌙 Dark Theme"}
      </button>
    </div>
  );
}

export default ThemeToggle;