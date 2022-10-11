import "./App.css";
// import { Button } from "./components/atoms/Buttons/Button";
// import { Text } from "./components/atoms/Text/Text";
// import { TextInput } from "./components/atoms/TextInput/TextInput";
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
