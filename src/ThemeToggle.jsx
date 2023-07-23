import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { contextglobalUser } from "./context";

const App = () => {
  const { isDark, themeToggle } = contextglobalUser();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={themeToggle}>
        {isDark ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default App;
