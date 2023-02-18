import React, { useState } from "react";
import { ManagedDigitsClock } from "../ManagedDigitsClock";
import { getCurrentDateFormat } from "../../../utils";

export default {
  title: "components/ManagedDigitsClock",
  component: ManagedDigitsClock,
  parameters: {
    controls: {
      // This line hides specified controls
      exclude: /((on.*Change)|(update.*))/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
          width: "95vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
        width: "45%",
      }}
    >
      <ManagedDigitsClock />
    </div>
  );
};

Default.args = {};

export const useInterval = () => {
  const [useInterval, setUseInterval] = useState(false);
  const [localeTime, onTimeChange] = useState(getCurrentDateFormat());

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
        width: "50%",
      }}
    >
      <input
        type="checkbox"
        style={{ height: "50px", width: "50px" }}
        value={useInterval}
        onChange={(e) => setUseInterval(e.target.checked)}
      />
      <ManagedDigitsClock
        localeTime={localeTime}
        useInterval={useInterval}
        onTimeChange={onTimeChange}
      />
    </div>
  );
};

export const Custom = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "red solid 3px",
        height: `${props.height ?? 80}px`,
        width: `${props.width ?? 150}px`,
      }}
    >
      <ManagedDigitsClock />
    </div>
  );
};
Custom.argTypes = {
  height: { control: { type: "number", min: 50, max: 2000, step: 50 } },
  width: { control: { type: "number", min: 100, max: 3000, step: 50 } },
  useInterval: { control: false },
  currentDay: { control: false },
  localeTime: { control: false },
};
