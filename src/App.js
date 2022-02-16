import "./components/global.css"
import Header from "./components/header/Header";
import MobileMenu from "./components/menumobile/MobileMenu";
import Main from "./components/main/Main";
import Toogle from "./toogle/Toogle";
import { ThemeContext } from "./context/context";
import { useContext } from "react";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
   <>
    <div    style={{
      background: darkMode ? "black" : "white",
      color: darkMode && "white",
    }}>
        <Toogle/>
  <Header/>
  <MobileMenu/>
  <Main/>
    </div>
 

  </>
  );
}

export default App;
