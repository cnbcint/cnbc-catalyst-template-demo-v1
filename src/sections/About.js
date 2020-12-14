import React from "react";
import { ColumnContainer, Column } from "../components/common/Columns";

export default function About() {
  return (
    <div className="demo_advertorial__about">
      <ColumnContainer maxWidth="1500px" mobileBreak={900}>
        <Column width="40%">
          <h2>Introducing CNBC CATALYST™</h2>
        </Column>
        <Column width="60%">
          <div className="demo_advertorial__about__copy">
            <p>
              Every single day, CNBC plays host to more CEOs, CFOs and CMOs than
              any other media owner on the planet.
            </p>

            <p>
              With almost three decades of experience of curating the global
              business conversation, the network remains the number one choice
              of the world’s most powerful business leaders and investors.
            </p>

            <p>
              CNBC Catalyst is the in-house advertising agency of CNBC
              International, created to be the secret door for brands to access
              the C-Suite.
            </p>

            <p>
              By knowing exactly what makes this elusive audience tick, we
              provide our clients with an array of opportunities not even they
              thought were possible.
            </p>

            <p>We are the rights-holders to the C-Suite.</p>

            <p>
              <strong>We are CNBC CATALYST™.</strong>
            </p>
          </div>
        </Column>
      </ColumnContainer>
    </div>
  );
}
