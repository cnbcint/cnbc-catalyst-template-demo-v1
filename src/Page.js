import React from "react";
import Main from "./components/Main";
import Theme from "./Theme.json";
import SectionHero from "./components/SectionHero";
import Block from "./components/Block";
import Image from "./components/Image";
// import VimeoPlayer from "./components/VimeoPlayer";
import Text from "./components/Text";
import SimpleBoilerPlate from "./components/SimpleBoilerPlate";
import SocialShare from "./components/SocialShare";
import Title from "./components/Title";
import StickyBar from "./components/StickyBar";
import Section from "./components/Section";
import Menu from "./components/Menu";
import RightSideBlock from "./components/RightSideBlock";
import Landing from "./sections/Landing";

// import Quote from "./components/Quote";
function Page() {
  return (
    <Main {...Theme}>
      <Section path="#">
        <Landing
          className="Landing"
          title={() =>
            "How Anaplan brings agility and insight into business planning"
          }
          copyColor="#0B2265"
          overlayColor="rgba(255,255,255,0.5)"
          companyLogoURL="http://localhost:8080/images/logo.svg"
          companyLogoAligment="left"
          companyLogoMaxWidth="200px"
          dividerColor="primary"
          addDivider={false}
          copyAligment="left"
          copyMaxWidth="600px"
          // copyMaxWidth={Theme.maxWidth}
          backgroundImage={{
            desktop: "http://localhost:8080/images/heroanaplan2.jpg",
            tablet: "http://localhost:8080/images/heroanaplan2.jpg",
            mobile: "http://localhost:8080/images/heroanaplan2.jpg",
          }}
          alt="Alt Text"
          titleUppercased={false}
        />

        <Block>
          <SocialShare aligment="center" />
          <br />
          <Text highlight={true}>
            <strong>
              &quot;When I joined the McDonald&apos;s division of The Coca-Cola
              Company in late 2018, getting information from 70 finance people
              for our global P&amp;L meant emailing each of them a spreadsheet
              to fill out and return, followed by three months consolidating and
              summarizing. We brought Anaplan on quickly, and by the end of Q1
              2019, everyone was working from one place, using the same tool to
              input their numbers for real-time consolidation. It was a major
              unlock for efficiency and performance.&quot;
            </strong>
          </Text>
          <Text dropCap>
            That&apos;s the recollection of Victor C. Barnes, who recently
            joined Anaplan as Senior Vice President of Connected Planning. The
            company&apos;s platform helps companies like Coca-Cola access data
            from every corner of their business to model multiple scenarios
            quickly, build more accurate forecasts and make more confident
            decisions at the speed of the market.
          </Text>
          <Text>
            Barnes&apos;s new role is a labor of love since he was instrumental
            in introducing the McDonald&apos;s division of The Coca-Cola Company
            to Anaplan while working as the division&apos;s global CFO.
          </Text>
          <Text>
            Anaplan arms decision-makers across business areas with the
            visibility, data, advanced planning, modeling, and forecasting
            capabilities they need to identify new opportunities that drive
            growth and reduce costs.
          </Text>
          <Text>
            With McDonald&apos;s selling Coca-Cola products in 105 markets
            worldwide, Anaplan allowed Barnes to synchronize and standardize
            processes in different territories - reaching a level of efficiency
            and data granularity that hadn&apos;t been possible.
          </Text>
          <Text>
            After a successful global P&amp;L implementation, Barnes rolled
            Anaplan out more broadly.
          </Text>
          <Text>
            “It transformed the performance of the McDonald&apos;s division and
            will drive future performance across the organization.”
          </Text>
        </Block>

        <StickyBar>
          <Menu
            primaryColor="#8AC1FA"
            backgroundColor="linear-gradient(to top, rgba(20,42,109,0) 0%,rgba(20,42,109,1) 67%,rgba(20,42,109,1) 100%)"
            sections={[
              { label: "Anaplan solutions", path: "anaplan-solutions" },
              { label: "Case Studies", path: "case-studies" },
              { label: "About Anaplan", path: "about-anaplan" },
            ]}
          />
        </StickyBar>
      </Section>
      <Section path="anaplan-solutions">
        <SectionHero
          className="section1"
          title={() => "Turning data overload into a data goldmine"}
          subTitle=""
          backgroundImage={{
            desktop: "http://localhost:8080/images/h0.jpg",
            tablet: "http://localhost:8080/images/h0.jpg",
            mobile: "http://localhost:8080/images/h0.jpg",
          }}
          copyColor="#0B2265"
          overlayColor="linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 100%);"
          dividerColor="primary"
          copyAligment="left"
          copyMaxWidth="600px"
          // copyMaxWidth={Theme.maxWidth}
          // videoId="468693933"
          // videoRatio={720 / 360}
          // videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
          titleUppercased={false}
        />
        <RightSideBlock
          style={{ marginBottom: "0" }}
          sideContent={() => (
            //           <Quote>
            //           Lorem ipsum dolor sit amet, consectetur adipiscing elit
            // ut labore et dolore magna aliqua.
            //           </Quote>
            <div>
              <p>
                &quot;More data is great, but it also means more complexity, and
                static tools aren&apos;t useful when there is more data and
                complexity involved. It becomes a question of are you able to
                manage it or are you drowning in it?&quot;
              </p>
              <hr />
              <p>
                {/* create component for simple quotes */}
                {/* &quot;Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est.&quot; */}
              </p>
            </div>
          )}
        >
          <Text dropCap>
            As he works with other senior executives to transform their
            operations, Barnes notes that Anaplan helped reduce the time his
            team spent aggregating spreadsheet data, which led to more decisive
            analysis and quicker, better decision-making around &quot;where to
            play and how to win.&quot;
          </Text>
          <Text>
            Businesses have to parse through large amounts of internal and
            external data to create the assumptions used to build their
            forecasts, budgets, and plans. Still, today&apos;s businesses,
            Barnes notes, are dealing with a deluge of data that continues to
            accelerate.
          </Text>

          <Text>
            “More data is great, but it also means more complexity, and static
            tools aren&apos;t useful when there is more data and complexity
            involved. It becomes a question of are you able to manage it or are
            you drowning in it?” he said.
          </Text>
        </RightSideBlock>

        <Block style={{ paddingTop: "1rem" }}>
          {/* <Title
            dividerColor="primary"
          >
            Lorem Ipsum 1
          </Title>
          <Text dropCap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est. Lobortis mattis aliquam faucibus purus in. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Tincidunt arcu non sodales neque. Tellus id interdum velit laoreet id donec ultrices. In nulla posuere sollicitudin aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. In massa tempor nec feugiat nisl pretium fusce id. Semper viverra nam libero justo laoreet sit amet cursus. Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. 
          </Text> */}
          <Image
            source={{
              desktop: "http://localhost:8080/images/h1.jpg",
              tablet: "http://localhost:8080/images/h1.jpg",
              mobile: "http://localhost:8080/images/h1.jpg",
            }}
            alt="Alt Text"
          />
          {/* <VimeoPlayer autoplayScroll videoID="350988305" /> */}
          <Text>
            &quot;Many executives don&apos;t understand the problem with
            disparate planning in Excel or are too far from the details to know
            how to improve. By the time they get their information, it looks
            pretty, but it&apos;s often outdated, inconsistent, and
            disconnected.&quot;
          </Text>
          <Text>
            Instead, transparency and confidence in data received from across
            the company enables decisive resource allocation, clarity on drivers
            and can positively impact results and earnings guidance.
          </Text>
          <Text>
            Anaplan helps solve the data problem by housing company data and
            third-party data — like distributor shipments and inventory levels —
            in a single environment that users across a business and their
            partners can access simultaneously. With a constant flow of
            real-time data, organizations can build more predictive models and
            make more accurate assumptions, turning the data deluge into a
            competitive advantage that helps them win in the market.
          </Text>
        </Block>

        <SectionHero
          className="section2"
          title={() => "The age of artificial intelligence"}
          subTitle=""
          backgroundImage={{
            desktop: "http://localhost:8080/images/h2.jpg",
            tablet: "http://localhost:8080/images/h2.jpg",
            mobile: "http://localhost:8080/images/h2.jpg",
          }}
          copyColor="#0B2265"
          overlayColor="linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 100%);"
          dividerColor="primary"
          copyAligment="left"
          copyMaxWidth="600px"
          // copyMaxWidth={Theme.maxWidth}
          // videoId="468693933"
          // videoRatio={720 / 360}
          // videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
          titleUppercased={false}
        />
        <Block>
          <Text dropCap>
            Barnes also emphasizes the importance of intelligence in future
            business operations. &quot;The power of AI and ML algorithms is they
            learn from the data you feed them, that requires end-to-end data
            visibility. Anaplan allows you to connect valuable data from source
            to user and then leverage that data in your planning and forecasting
            for greater accuracy.&quot;
          </Text>
          <Text>
            The company recently introduced PlanIQ, an intelligence framework
            that gives customers advanced AI and ML capabilities for predictive
            forecasting, and works with public cloud partners like Google Cloud
            and AWS to integrate additional intelligence features with its
            platform.
          </Text>
        </Block>

        <SectionHero
          className="section3"
          title={() => "Unlocking efficiencies to deliver value "}
          subTitle=""
          backgroundImage={{
            desktop: "http://localhost:8080/images/h3.jpg",
            tablet: "http://localhost:8080/images/h3.jpg",
            mobile: "http://localhost:8080/images/h3.jpg",
          }}
          copyColor="#0B2265"
          overlayColor="linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 100%);"
          dividerColor="primary"
          copyAligment="left"
          copyMaxWidth="600px"
          // copyMaxWidth={Theme.maxWidth}
          // videoId="468693933"
          // videoRatio={720 / 360}
          // videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
          titleUppercased={false}
        />
        <RightSideBlock
          style={{ marginBottom: 0 }}
          sideContent={() => (
            //           <Quote>
            //           Lorem ipsum dolor sit amet, consectetur adipiscing elit
            // ut labore et dolore magna aliqua.
            //           </Quote>
            <div>
              <p>
                &quot;Companies should now realize the importance of having the
                right data at the right time.&quot;
              </p>
              <hr />
              <p>
                &quot;You can&apos;t just plan and walk away; you have to be
                able to manage change and identify levers that will help you
                pivot and adapt.&quot;
              </p>
            </div>
          )}
        >
          <Text dropCap>
            Barnes notes that a business&apos;s value chain can essentially be
            broken down into primary activities, like operations, logistics,
            sales, and secondary activities, like R&amp;D, hiring, and
            procurement.
          </Text>
          <Text>
            By breaking down silos and making it easier to access complex data,
            Anaplan enables leaders for each area to work together more
            effectively to optimize processes, reduce costs and drive higher
            profits.
          </Text>
          <Text>
            &quot;Anaplan connects the critical pieces of your business so you
            can unlock new opportunities. Whether it&apos;s workforce planning
            optimization, M&amp;A, commercializing new products, or finding new
            routes to market, the platform can help you prosper in the sea of
            change we find ourselves in,&quot; Barnes said.
          </Text>
        </RightSideBlock>

        <Block style={{ paddingTop: "1rem" }}>
          <Image
            source={{
              desktop: "http://localhost:8080/images/h5.jpg",
              tablet: "http://localhost:8080/images/h5.jpg",
              mobile: "http://localhost:8080/images/h5.jpg",
            }}
            alt="Alt Text"
          />
          {/* <VimeoPlayer autoplayScroll videoID="350988305" /> */}
          <Text>
            This is especially prescient following the shocks of the pandemic,
            which he explains has called into question the idea of annual
            operating plans. &quot;Companies should now realize the importance
            of having the right data at the right time. You can&apos;t just plan
            and walk away; you have to be able to manage change and identify
            levers that will help you pivot and adapt.&quot;
          </Text>
          <Text>
            In less than 18 months, the McDonald&apos;s division became a model
            team within The Coca-Cola Company by creating one global view of a
            business spanning 105 countries and 20 currencies. Individuals
            across the division were able to increase their contributions to the
            company by diagnosing a wide range of scenarios quickly and
            accurately, responding to shifting priorities confidently, and
            delivering on the company&apos;s most important objectives.
          </Text>
        </Block>
      </Section>
      <Section path="case-studies">
        <SectionHero
          className="section4"
          title={() => "Discover how Anaplan has been helping other companies "}
          subTitle=""
          backgroundImage={{
            desktop: "http://localhost:8080/images/h6.jpg",
            tablet: "http://localhost:8080/images/h6.jpg",
            mobile: "http://localhost:8080/images/h6.jpg",
          }}
          copyColor="#0B2265"
          overlayColor="linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,.8) 100%);"
          dividerColor="primary"
          copyAligment="left"
          copyMaxWidth="600px"
          // copyMaxWidth={Theme.maxWidth}
          // videoId="468693933"
          // videoRatio={720 / 360}
          // videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
          titleUppercased={false}
        />
        <Block>
          <Title addDivider={false}>Del Monte</Title>
          <Text>
            Before Anaplan, global foods company Del Monte was using a mix of
            hundreds of giant spreadsheets and inflexible legacy tools to manage
            their financial planning and supply chain processes. The process was
            slow, and averages were often used, which lead to discrepancies
            between forecasts and actual costs.
          </Text>
          <Text>
            By bringing on Anaplan, Del Monte integrated finance and supply
            chain planning processes, allowing its finance teams to evaluate
            product costs and complete profitability analysis accurately.
          </Text>
          <Text>
            The integration has also empowered Del Monte to anticipate, predict,
            and accommodate market changes in real-time. For example, because of
            El Nino, Del Monte struggled to prioritize product allocation. But
            now, with Anaplan, they can run real-time scenarios and see what
            areas may not be profitable and report this back to their sales,
            channel sales, and logistic teams to adjust strategy.
          </Text>
          <Text>
            &quot;It used to take us five days to react to demand changes. Now,
            with Anaplan, it takes us less than five minutes to come up with the
            necessary adjustments in production,&quot; said RK Del Rosario,
            supply chain planning senior manager at Del Monte. &quot;It used to
            take us five days to react to demand changes. Now, with Anaplan, it
            takes us less than five minutes to come up with the necessary
            adjustments in production,&quot; said RK Del Rosario, supply chain
            planning senior manager at Del Monte.
          </Text>

          <Title addDivider={false}>Hitachi</Title>
          <Text>
            The Brake Business Unit at Hitachi Automotive Systems leverages
            Anaplan to capture data automatically in models that span and
            connect sales, capacity, purchasing, resource, and financial plans.
          </Text>
          <Text>
            The company&apos;s extended product development cycles mean a clear
            view of the future is critical, which puts pressure on plans&apos;
            accuracy and fluidity. Anaplan replaced a system of manual
            spreadsheets and databases and is crucial to the Brake Business Unit
            knowing which new projects and contracts they can win and how much
            they will sell.
          </Text>
          <Text>
            From forecasting sales volumes years into the future, calculating
            the costs of raw materials, and planning the correct headcount,
            Anaplan enables the company to easily monitor and manage its
            business from sales to cash, giving leaders a clear view of the
            entire business for more strategic and agile decision-making.
          </Text>
          <Text>
            Augustin Fabre, Controller, Brake Business Unit, said: &quot;We now
            have a much clearer view of the future. If something changes on a
            project, everyone knows it immediately and can respond
            quickly.&quot;
          </Text>
        </Block>
      </Section>
      <Section path="about-anaplan">
        <Block
          style={{
            background: "url(http://localhost:8080/images/boilerplate.jpg)",
            color: "white",
          }}
        >
          <SimpleBoilerPlate
            // backgroundImage={{
            //   desktop:
            //   "http://localhost:8080/images/h0.jpg",
            // tablet:
            //   "http://localhost:8080/images/h0.jpg",
            // mobile:
            //   "http://localhost:8080/images/h0.jpg",
            // }}
            companyLogoURL="http://localhost:8080/images/logow.svg"
            title=""
            copyColor=""
            copy={() => (
              <div>
                <p>
                  Anaplan, Inc. (NYSE: PLAN) is a cloud-native enterprise SaaS
                  company helping global enterprises orchestrate business
                  performance. Leaders across industries rely on our
                  platform—powered by our proprietary Hyperblock® technology—to
                  connect teams, systems, and insights from across their
                  organizations to continuously adapt to change, transform how
                  they operate, and reinvent value creation. Based in San
                  Francisco, Anaplan has over 175 partners and more than 1,600
                  customers worldwide.
                </p>
              </div>
            )}
            outColor="white"
            overColor="#95C0F5"
            ctaText="Find out More"
            ctaLink="https://www.anaplan.com/"
          />
        </Block>
      </Section>
    </Main>
  );
}

export default Page;
