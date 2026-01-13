import "./App.css";
import { Home } from "./pages/home/Home";
import ThemeButton from "./components/buttons/ThemeButton";

function App() {
  return (
    <>
      <div className="">
        <Home />
        <ThemeButton className="fixed bottom-5 right-5 z-50" />
      </div>
    </>
  );
}

export default App;
