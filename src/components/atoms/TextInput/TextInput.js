import React from "react";
import "./TextInput.css";

export const TextInput = ({
  placeholder,
  label,
  optional,
  onChange,
  type = "text",
  value,
  minLength,
  maxLength,
}) => {
  return (
    <div className="inputContainer">
      <label>
        {label}
        {optional}
      </label>
      <br />
      {label === "Workspace URL" ? (
        <div className="workspaceURL">
          <div className="url">www.eden.com/</div>
          <input
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            value={value}
            autoComplete="off"
            minLength={minLength}
            maxLength={maxLength}
          />
        </div>
      ) : (
        <input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          value={value}
          autoComplete="off"
          minLength={minLength}
          maxLength={maxLength}
          required
        />
      )}
    </div>
  );
};
