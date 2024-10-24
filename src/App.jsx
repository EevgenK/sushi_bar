import { useState } from "react";

import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Navigation from "./components/Navigation/Navigation";
import "modern-normalize";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="app">
      <MainPage />
      <Navigation />
    </section>
  );
}

export default App;
