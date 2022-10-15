import React, { useState } from "react";
import { tabHeadings } from "../../mockData/headings";
import { selectCards } from "../../mockData/selectCards";
import { Button } from "../atoms/Buttons/Button";
import { Card } from "../atoms/Card/Card";
import { Text } from "../atoms/Text/Text";
import { TextInput } from "../atoms/TextInput/TextInput";
import { StepperHorizontal } from "../StepperHorizontal/StepperHorizontal";
import "./OnBoarding.css";

export const OnBoarding = () => {
  const [tabNumber, setTabNumber] = useState(1);
  console.log("tabNumber", tabNumber);

  const [user, setUser] = useState({
    fullName: "",
    displayName: "",
  });
  const [workSpace, setWorkSpace] = useState({
    workspaceName: "",
    workspaceURL: "",
  });
  const [usage, setUsage] = useState({
    usage: "",
  });

  const [formState, setFormState] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    usage: "",
  });

  const handleClick = () => {
    setFormState({ ...user, ...workSpace, ...usage });
    if (tabNumber === 3) setTabNumber((tab) => tab + 1);
    if (tabNumber === 4) console.log(formState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (tabNumber === 4) return;
    setTabNumber((tab) => tab + 1);
  };

  return (
    <div>
      <div style={{ minHeight: "200px" }}>
        <StepperHorizontal activeStep={tabNumber} />

        {tabNumber < 4 && tabHeadings[tabNumber - 1].main && (
          <>
            <Text
              heading={tabHeadings[tabNumber - 1].main}
              paragraph={tabHeadings[tabNumber - 1].sub}
            />
          </>
        )}
      </div>

      <div style={{ minWidth: "550px" }}>
        {tabNumber === 1 && (
          <form onSubmit={handleFormSubmit}>
            <TextInput
              label="Full Name"
              placeholder="Steve Jobs"
              value={user.fullName}
              onChange={(value) => setUser({ ...user, fullName: value })}
              minLength="2"
              maxLength="25"
            />
            <TextInput
              label="Display Name"
              placeholder="Steve"
              value={user.displayName}
              onChange={(value) => setUser({ ...user, displayName: value })}
              minLength="2"
              maxLength="12"
            />
            <Button buttonText="Create Workspace" />
          </form>
        )}

        {tabNumber === 2 && (
          <form onSubmit={handleFormSubmit}>
            <TextInput
              label="Workspace Name"
              placeholder="Eden"
              value={workSpace.workspaceName}
              onChange={(value) =>
                setWorkSpace({ ...workSpace, workspaceName: value })
              }
              minLength="2"
              maxLength="25"
            />
            <TextInput
              label="Workspace URL"
              placeholder="Example"
              value={workSpace.workspaceURL}
              onChange={(value) =>
                setWorkSpace({ ...workSpace, workspaceURL: value })
              }
              minLength="2"
              maxLength="20"
              optional="(optional)"
            />
            <Button buttonText="Create Workspace" />
          </form>
        )}

        {tabNumber === 3 && (
          <div className="tabThree">
            <div className="cardsContainer">
              {selectCards.map((card) => {
                return (
                  <Card
                    key={card.id}
                    isActive={card.id === usage.usage}
                    card={card}
                    setUsage={setUsage}
                  />
                );
              })}
            </div>
            <Button buttonText="Create Workspace" handleClick={handleClick} />
          </div>
        )}

        {tabNumber === 4 && (
          <div className="tabFour">
            <div className="tabFourImg">
              <img src="https://i.ibb.co/w6sSB5J/check.png" alt="check" />
            </div>
            <span
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                fontWeight: "600",
              }}
            >
              Congratulations, {formState.displayName}!
            </span>
            <span
              style={{
                fontSize: ".9rem",
                color: "#9ba0ab",
              }}
            >
              You have completed onboarding, you can start using the Eden!
            </span>
            <Button buttonText="Launch Eden" handleClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};
