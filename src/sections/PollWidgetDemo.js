import React, { useEffect } from "react";

export default function PollWidgetDemo() {
  useEffect(() => {
    new window.CatalystPoll(
      "polldemowidget",
      "7101aef0-d333-11ea-bff6-ed71b64dd61f"
    );
  }, []);
  return (
    <div className="demo_advertorial__polldemo">
      <h3>Poll Widget Demo</h3>
      <div id="polldemowidget"></div>
    </div>
  );
}
