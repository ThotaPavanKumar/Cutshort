import React from "react";
import { tabHeadings } from "../../mockData/headings";
import { Button } from "../atoms/Buttons/Button";
import { Text } from "../atoms/Text/Text";
import { TextInput } from "../atoms/TextInput/TextInput";
import "./OnBoarding.css";

export const OnBoarding = () => {
  return (
    <div>
      <div>
        <Text heading={tabHeadings[0].main} paragraph={tabHeadings[0].sub} />
      </div>
      <div>
        <TextInput placeholder="pavan" label="First Name" />
        <TextInput placeholder="pavan" label="First Name" />
        <Button buttonText="Create Workspace" />
      </div>
    </div>
  );
};
