import React from "react";
import { ColumnContainer, Column } from "../components/common/Columns";
import BackgroundImage from "../components/common/BackgroundImage";

export default function Strategy() {
  return (
    <div className="demo_advertorial__strategy">
      <ColumnContainer
        className="demo_advertorial__strategy__item"
        maxWidth="1500px"
        mobileBreak={760}
      >
        <Column width="60%">
          <div className="demo_advertorial__strategy__title">
            <h2>SIMPLE AS ABCDE</h2>
          </div>
        </Column>
        <Column width="40%">
          <div className="demo_advertorial__strategy__item__copy">
            <p>
              Leaders in their respective fields, CNBC consumers are on top of
              their game. They are the best and they expect the best.
            </p>
            <p>
              At CNBC Catalyst, we have built an exclusive advertising playbook
              of the many devices and tactics you can deploy to achieve the
              desired response from our discerning audience. Let us take you
              through our unique process: <strong>ABCDE.</strong>
            </p>
          </div>
        </Column>
      </ColumnContainer>
      <BackgroundImage
        className="demo_advertorial__strategy__audience"
        src="http://localhost:8080/images/catalyst-audience-bg.jpg"
      >
        <ColumnContainer
          className="demo_advertorial__strategy__item"
          maxWidth="1500px"
          mobileBreak={760}
        >
          <Column width="60%">
            <div className="demo_advertorial__strategy__title">
              <span>A</span>
            </div>
          </Column>
          <Column width="40%">
            <div className="demo_advertorial__strategy__item__copy">
              <h3>Audience</h3>
              <p>
                You won’t find a more engaged collection of senior business
                leaders than at CNBC. That’s why the CNBC audience is at the
                centre of everything we do. By taking time to understand how our
                viewers tick, we’re able to help our clients reach them in the
                right place, at the right time.
              </p>
            </div>
          </Column>
        </ColumnContainer>
      </BackgroundImage>
      <ColumnContainer
        className="demo_advertorial__strategy__item"
        maxWidth="1500px"
        mobileBreak={760}
      >
        <Column width="60%">
          <div className="demo_advertorial__strategy__item__copy">
            <h3>Brand Strategy</h3>
            <p>
              As the rights-holders to the C-Suite, we’ve assembled a team of
              strategic brand specialists who are experts in providing counsel
              to our clients on how best to engage CNBC’s powerful audience. By
              knowing exactly what our audience wants from brands, our brand
              strategists will advise you on cutting-edge solutions to your most
              complex brand challenges.
            </p>
          </div>
        </Column>
        <Column width="40%">
          <div className="demo_advertorial__strategy__title">
            <span>B</span>
          </div>
        </Column>
      </ColumnContainer>
      <BackgroundImage
        className="demo_advertorial__strategy__content"
        src="http://localhost:8080/images/catalyst-content-bg.jpg"
      >
        <ColumnContainer
          className="demo_advertorial__strategy__item"
          maxWidth="1500px"
          mobileBreak={760}
        >
          <Column width="60%">
            <div className="demo_advertorial__strategy__title">
              <span>C</span>
            </div>
          </Column>
          <Column width="40%">
            <div className="demo_advertorial__strategy__item__copy">
              <h3>Content Studio</h3>
              <p>
                Our journalism has been reaching the C-Suite for over 25 years.
                For the last decade, we’ve been creating commercial content for
                this audience too. The Catalyst Content Studio commands a
                stellar track record of award-winning commercial, creative
                production. Experts in their field, they will give voice to your
                brand story with both gravitas and beauty to ensure a full
                return on investment.
              </p>
            </div>
          </Column>
        </ColumnContainer>
      </BackgroundImage>
      <ColumnContainer
        className="demo_advertorial__strategy__item"
        maxWidth="1500px"
        mobileBreak={760}
      >
        <Column width="60%">
          <div className="demo_advertorial__strategy__item__copy">
            <h3>Data and Insights</h3>
            <p>
              The Data and Insights Unit are experts in knowing what makes the
              C-Suite tick. By conducting regular in-depth research with the
              CNBC audience their insight can help inform your campaign to
              always ensure the highest levels of success. The team also has a
              wealth of experience in creating bespoke research for the world’s
              biggest brands allowing our clients access to unrivalled
              intelligence.
            </p>
          </div>
        </Column>
        <Column width="40%">
          <div className="demo_advertorial__strategy__title">
            <span>D</span>
          </div>
        </Column>
      </ColumnContainer>
      <BackgroundImage
        className="demo_advertorial__strategy__experience"
        src="http://localhost:8080/images/catalyst-experience-bg.jpg"
      >
        <ColumnContainer
          className="demo_advertorial__strategy__item"
          maxWidth="1500px"
          mobileBreak={760}
        >
          <Column width="60%">
            <div className="demo_advertorial__strategy__title">
              <span>E</span>
            </div>
          </Column>
          <Column width="40%">
            <div className="demo_advertorial__strategy__item__copy">
              <h3>Experience</h3>
              <p>
                The Events and Experiences team produces everything from
                intimate dinners at the World Economic Forum to Asia’s premier
                business awards gala. With the power to convene the most
                powerful business leaders globally, they will always deliver a
                memorable and profitable experience.
              </p>
            </div>
          </Column>
        </ColumnContainer>
      </BackgroundImage>
    </div>
  );
}
