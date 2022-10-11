import "./App.css";
import { Button } from "./components/atoms/Buttons/Button";
import { Text } from "./components/atoms/Text/Text";
import { TextInput } from "./components/atoms/TextInput/TextInput";

function App() {
  const heading = "Welcome! First things first...";
  const paragraph = "You can always change them later";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid yellow",
      }}
    >
      {/* <div> */}
        <div>
          <Text heading={heading} paragraph={paragraph} />
        </div>
        <div style={{ width: "40%" }}>
          <TextInput placeholder="pavan" label="First Name" />
          <TextInput placeholder="pavan" label="First Name" />
          <Button buttonText="Create Workspace" />
        </div>
      {/* </div>   */}
    </div>
  );
}

export default App;
