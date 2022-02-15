import "./components/global.css"
import Header from "./components/header/Header";
import MobileMenu from "./components/menumobile/MobileMenu";
import Main from "./components/main/Main";
function App() {
  return (
   <>
  <Header/>
  <input type="checkbox" id="menu-toggle" />
  <MobileMenu/>
  <Main/>

  </>
  );
}

export default App;
