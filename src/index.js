import React from "react";
import ReactDOM from "react-dom";

import "./scss/index.scss";
import Page from "./Page";

ReactDOM.render(
  <Page />,
  document.getElementById("CNBCCatalystCampaign_Root"),
  () => {
    document.dispatchEvent(new Event("CATALYST_REACT_REDNDERED"));
  }
);
