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
          title={() => "How Anaplan brings agility and insight into business planning"}
          // subTitle="The standard Lorem Ipsum passage, used since the 1500s"
          // copy={() => (
          //   <p>
          //     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          //     commodo <strong>ligula eget dolor.</strong> Aenean massa. Cum
          //     sociis natoque penatibus et magnis dis parturient montes, nascetur
          //     ridiculus mus.
          //   </p>
          // )}
          copyColor="#0B2265"
          companyLogoURL="http://localhost:8080/images/logo.svg"
          companyLogoAligment="left"
          companyLogoMaxWidth="200px"
          dividerColor="primary"
          addDivider={false}
          copyAligment="left"
          copyMaxWidth="600px"
          // copyMaxWidth={Theme.maxWidth}
          backgroundImage={{
            desktop:
            "http://localhost:8080/images/header-desktop.jpg",
          tablet:
            "http://localhost:8080/images/header-desktop.jpg",
          mobile:
            "http://localhost:8080/images/header-desktop.jpg",
          }}
          alt="Alt Text"
          // videoId="468693933"
          // videoRatio={720 / 360}
          // videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
          titleUppercased={false}
        />
        
        <Block>
          <SocialShare 
          aligment="center"/>
          <br />
          <Text highlight={true}>
          <strong>When I first joined the Coca-Cola team supporting our global business with McDonald’s, getting information from 70 global finance people for our P&L meant emailing them each a spreadsheet to fill out. We brought Anaplan on quickly, and all of a sudden everyone was working from one place, using the same tool to input their numbers in real time. It was a major unlock for efficiency.</strong>
          </Text>
         
          <Text dropCap>
          That’s the recollection of Victor C. Barnes, who recently joined Anaplan as Senior Vice President of Connected Planning. The company’s online platform helps companies, like Coca-Cola, access data from every corner of their business so they can model multiple scenarios quickly, build more accurate forecasts and make more confident decisions. 
          </Text>
          <Text>
          For Barnes, his new role is a labor of love, having been instrumental in introducing the McDonald’s Division of The Coca-Cola Company to the enterprise tool while working as the division’s global CFO.
          </Text>
          <Text>
       
Anaplan arms decision-makers across business areas with the visibility, data and advanced planning, modelling, and forecasting capabilities needed to identify new opportunities to drive growth and reduce costs. 
    </Text>
          <Text>
With McDonald’s selling Coca-Cola products in 105 markets worldwide, Anaplan allowed Barnes to synchronize and standardize processes in different territories - reaching a level of efficiency and data granularity that hadn’t been possible.
    </Text>
          <Text>
After a successful global P&L implementation, Barnes rolled Anaplan out more broadly, winning plaudits from across the organization.  
    </Text>
          <Text>
“It transformed the capabilities of the McDonald’s division and will drive performance across the organization in the future.”

          </Text>
          
        </Block>

        <StickyBar>
          <Menu
          primaryColor="#8AC1FA"
          backgroundColor="linear-gradient(to top, rgba(20,42,109,0) 0%,rgba(20,42,109,1) 67%,rgba(20,42,109,1) 100%)"
            sections={[
              { label: "Anaplan solutions", path: "anaplan-solutions" },
              { label: "Groupon", path: "groupon" },
              { label: "Hitachi", path: "hitachi" },
              { label: "About Anaplan", path: "about-anaplan" },
            ]}
          />
        </StickyBar>
      </Section>
      <Section path="anaplan-solutions">
      <SectionHero
        className="section1"
        title={() => "The age of artificial intelligence"}
        subTitle=""
        backgroundImage={{
          desktop:
          "http://localhost:8080/images/h0.jpg",
        tablet:
          "http://localhost:8080/images/h0.jpg",
        mobile:
          "http://localhost:8080/images/h0.jpg",
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
        sideContent={() => (
//           <Quote>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit
// ut labore et dolore magna aliqua.
//           </Quote>
            <div>
              <p>
                &quot;More data is great, but it also means more complexity, and static tools run out of usefulness when there is more data and complexity involved.&quot;
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
        As he works with other C-Suite executives to transform their operations, Barnes notes that Anaplan helped reduce the time his team spent aggregating spreadsheet data, which led to stronger analysis and quicker decision-making around “where to play and how to win”. 
        </Text>
          <Text>
“Many executives don’t understand the problem with disparate planning in Excel. By the time they get their information, it’s been chewed up and digested and it looks pretty. They aren’t involved in how it got there but they are making critical decisions based on it,” he explained.
</Text>
          <Text>
The reality is businesses have to parse through large amounts of internal and external data to create the assumptions used to build their forecasts, budgets and plans, but today’s organizations, Victor notes, are dealing with a deluge of data that continues to accelerate. 
</Text>
          <Text>
“More data is great, but it also means more complexity, and static tools run out of usefulness when there is more data and complexity involved. It becomes a question of are you able to manage it or are you drowning in it?” he said.
</Text>
          <Text>
Anaplan helps solve the data problem by housing company data and third-party data — like distributor shipments and inventory levels — in a single environment that users across a business and their trading partners can access at the same time. With a constant flow of real-time data, organizations can build more predictive models and make more accurate assumptions, turning the data deluge into a competitive advantage. 
          </Text>
         
      </RightSideBlock>
      
        <Block>
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
            desktop:
            "http://localhost:8080/images/h1.jpg",
          tablet:
            "http://localhost:8080/images/h1.jpg",
          mobile:
            "http://localhost:8080/images/h1.jpg",
          }}
            alt="Alt Text"
          />
          {/* <VimeoPlayer autoplayScroll videoID="350988305" /> */}
          <Text>
          “More data is great, but it also means more complexity, and static tools run out of usefulness when there is more data and complexity involved. It becomes a question of are you able to manage it or are you drowning in it?” he said.
          </Text>
          <Text>
          Anaplan helps solve the data problem by housing company data and third-party data — like distributor shipments and inventory levels — in a single environment that users across a business and their trading partners can access at the same time. With a constant flow of real-time data, organizations can build more predictive models and make more accurate assumptions, turning the data deluge into a competitive advantage. 
          </Text>
         
        </Block>
     
      <SectionHero
        className="section2"
        title={() => "Turning data overload into a data goldmine "}
        subTitle=""
        backgroundImage={{
          desktop:
          "http://localhost:8080/images/h2.jpg",
        tablet:
          "http://localhost:8080/images/h2.jpg",
        mobile:
          "http://localhost:8080/images/h2.jpg",
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
        Victor also emphasizes the importance of intelligence in future business operations. “The power of AI and ML algorithms is they learn from the data you feed them, that requires end-to-end data visibility. Anaplan gives you the opportunity to connect valuable data from source to user and then leverage that data in your planning and forecasting for greater accuracy.”  
        </Text>
          <Text>
          The company recently introduced PlanIQ, an intelligence framework that gives customers advanced AI and ML capabilities for predictive forecasting, and is working with public cloud partners like Google Cloud and AWS to integrate additional intelligence features with its platform. 

</Text>
        </Block>
        
          
   
      <SectionHero
        className="section3"
        title={() => "Unlocking efficiencies to deliver value "}
        subTitle=""
        backgroundImage={{
          desktop:
          "http://localhost:8080/images/h3.jpg",
        tablet:
          "http://localhost:8080/images/h3.jpg",
        mobile:
          "http://localhost:8080/images/h3.jpg",
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
        sideContent={() => (
//           <Quote>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit
// ut labore et dolore magna aliqua.
//           </Quote>
            <div>
              <p>
                &quot;Companies should now realize the importance of having the right data at the right time.&quot;
              </p>
              <hr />
              <p>
                &quot;You can’t just plan and walk away; you have to be able to manage change and scenarios and identify levers that will help you pivot and adapt.&quot;
              </p>
            </div>
        )}
      >
        <Text dropCap>
        Victor notes that a business’s value chain can largely be broken down into primary activities, like operations, logistics and sales, and secondary activities, like R&D, hiring and procurement.
        </Text>
          <Text>
          By breaking down silos and making it easier to access complex data, Anaplan, he believes, enables those leaders responsible for each activity to work together more effectively to optimize processes, reduce costs and drive higher profits. 
</Text>
          <Text>
          “Anaplan connects the critical pieces of your business so you can unlock new opportunities. Whether it’s workforce planning optimization, M&A, commercializing new products or finding new routes to market the platform can help you prosper in the sea of change we find ourselves in,” Barnes said.
</Text>
          <Text>
          This is especially prescient following the shocks of the pandemic, which he explained has called into question the idea of annual operating plans. “Companies should now realize the importance of having the right data at the right time. You can’t just plan and walk away; you have to be able to manage change and scenarios and identify levers that will help you pivot and adapt.”
</Text>
         
      </RightSideBlock>
      
        <Block>
       
          <Image
           source={{
            desktop:
            "http://localhost:8080/images/h5.jpg",
          tablet:
            "http://localhost:8080/images/h5.jpg",
          mobile:
            "http://localhost:8080/images/h5.jpg",
          }}
            alt="Alt Text"
          />
          {/* <VimeoPlayer autoplayScroll videoID="350988305" /> */}
          <Text>
          “More data is great, but it also means more complexity, and static tools run out of usefulness when there is more data and complexity involved. It becomes a question of are you able to manage it or are you drowning in it?” he said.
          </Text>
          <Text>
          Anaplan helps solve the data problem by housing company data and third-party data — like distributor shipments and inventory levels — in a single environment that users across a business and their trading partners can access at the same time. With a constant flow of real-time data, organizations can build more predictive models and make more accurate assumptions, turning the data deluge into a competitive advantage. 
          </Text>
         
        </Block>
      </Section>
      <SectionHero
        className="section4"
        title={() => "Discover how Anaplan has been helping other companies "}
        subTitle=""
        backgroundImage={{
          desktop:
          "http://localhost:8080/images/h6.jpg",
        tablet:
          "http://localhost:8080/images/h6.jpg",
        mobile:
          "http://localhost:8080/images/h6.jpg",
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

        <Section path="groupon">

        <Title
            addDivider={false}
          >
            Groupon          
            </Title>          
          <Text>
          When Groupon began using Anaplan in 2013 the fast-paced company was trying to unlock efficiencies in their finance department, where offline spreadsheets made it difficult to create precise forecasts and reports. 
          </Text>
            <Text>         
              Today the company has over 20 Anaplan use cases, including an innovative Master Data Management model that touches workforce, general ledger, vendor information and financial data, and more than 150 Anaplan users globally. Groupon’s finance team leverages Anaplan to model, analyze and report valuable insights related to key financial documents and outlooks, from Groupon’s income statement to its balance sheet. 
            </Text>
          <Text>          
          Megan Carrozza, Groupon’s Senior Finance Manager, explained Anaplan has benefited the entire company, cutting down time spent on mundane tasks and making plans, forecasts and budgets more accurate. “The power of Anaplan to apply automation and standardization to a fast-moving company like Groupon is really powerful,” Carrozza added.
          </Text>
          </Section>
          <Section path="hitachi">

          <Title
            addDivider={false}
          >
            Hitachi          
            </Title>          
          <Text>
          The Brake Business Unit at Hitachi Automotive Systems leverages Anaplan to capture data automatically in connected models across sales, capacity, purchasing, resource, and financial plans. 
          </Text>
            <Text>         

            The company’s long product development cycles mean a clear view of the future is critical, which puts pressure on the accuracy, and fluidity of plans. Anaplan replaced a system of manual spreadsheets and databases, and is now integral to helping the Brake Business Unit decide which new projects and contracts they can win and how much they will sell.


            </Text>
          <Text>          
          From forecasting sales volumes years into the future, to calculating the costs of raw materials and planning the right headcount, Anaplan enables the company to easily monitor and manage its business from sales to cash, giving leaders a clear view of the entire business for more strategic and agile decision-making. 

          </Text>
          <Text>           
          Augustin Fabre, Controller, Brake Business Unit, said: “We now have a much clearer view of the future. If something changes on a project, everyone knows it immediately and can respond quickly.”
          </Text>
      </Section>
      </Block>
      <Section path="about-anaplan">
      <Block style={{ background: "url(http://localhost:8080/images/boilerplate.jpg)", color: "white" }}>
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
              Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. A erat nam at lectus urna. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Non diam phasellus vestibulum lorem. 
              </p>
              <p>
              Tristique senectus et netus et. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Etiam erat velit scelerisque in dictum non consectetur a erat. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.
            </p>
            </div>
          
          )}
          outColor="white"
          overColor="#95C0F5"
          ctaText="Find out More"
          ctaLink="https://www.anaplan.com/why-anaplan/"
        />
      </Block>
   </Section>
    </Main>
  );
}

export default Page;
