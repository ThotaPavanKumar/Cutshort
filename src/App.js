import "./App.css";
import { LogoHeader } from "./components/LogoHeader/LogoHeader";
import { OnBoarding } from "./components/OnBoarding/OnBoarding";

function App() {
  return (
    <div className="app">
      <div>
        <LogoHeader />
        <OnBoarding />
      </div>
    </div>
  );
}

export default App;
