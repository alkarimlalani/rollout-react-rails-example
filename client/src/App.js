import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import {
  AutomationsManager,
  RolloutConnectProvider,
  AutomationCreator,
  curlyTemplate,
  defaultTheme,
} from "@rollouthq/connect-react";

defaultTheme();

function App() {
  const [rolloutToken, setRolloutToken] = useState();

  useEffect(() => {
    const getTokenFn = async () => {
      const response = await fetch("/rollout/get_token");
      const json = await response.json();
      setRolloutToken(json.token);
    };
    getTokenFn();
  }, []);

  return (
    <div className="App">
      <button
        className="submit-form-button"
        onClick={() => sendFormSubmissionEvent(rolloutToken)}
      >
        Simulate Form Submission
      </button>
      {rolloutToken && (
        <RolloutConnectProvider token={rolloutToken}>
          <div className="my-automations-wrapper">
            <AutomationsManager />
          </div>
        </RolloutConnectProvider>
      )}
    </div>
  );
}

async function sendFormSubmissionEvent(rolloutToken) {
  // Include the trigger key as well as any params expected
  // by the trigger
  const data = {
    triggerKey: "new_submission",
    payload: {
      email: "elon@tesla.com",
    },
  };
  const resp = await fetch("https://api.rollouthq.com/trigger-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${rolloutToken}`,
    },
    body: JSON.stringify(data),
  });
}

export default App;
