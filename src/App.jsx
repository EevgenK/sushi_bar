import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Navigation from "./components/Navigation/Navigation";
import "modern-normalize";

function App() {
  return (
    <section className="app">
      <MainPage />
      <Navigation />
    </section>
  );
}

export default App;
