import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import MenuPage from "./components/MenuPage/MenuPage";

import Navigation from "./components/Navigation/Navigation";
import "modern-normalize";

function App() {
  return (
    <div className="app">
      <Navigation />
      <MainPage />

      <MenuPage />
    </div>
  );
}

export default App;
