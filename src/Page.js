import React from "react";
import Main from "./components/Main";
import Theme from "./Theme.json";
import SimpleHero from "./components/SimpleHero";
import SectionHero from "./components/SectionHero";
import Block from "./components/Block";
import Image from "./components/Image";
import VimeoPlayer from "./components/VimeoPlayer";
import Text from "./components/Text";
import SimpleBoilerPlate from "./components/SimpleBoilerPlate";
import SocialShare from "./components/SocialShare";
import Title from "./components/Title";
import StickyBar from "./components/StickyBar";
import Section from "./components/Section";
import Menu from "./components/Menu";
import RightSideBlock from "./components/RightSideBlock";
// import Quote from "./components/Quote";
function Page() {
  return (
    <Main {...Theme}>
      <Section path="#">
        <SimpleHero
          className="Landing"
          title={() => "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
          // subTitle="The standard Lorem Ipsum passage, used since the 1500s"
          // copy={() => (
          //   <p>
          //     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          //     commodo <strong>ligula eget dolor.</strong> Aenean massa. Cum
          //     sociis natoque penatibus et magnis dis parturient montes, nascetur
          //     ridiculus mus.
          //   </p>
          // )}
          companyLogoURL="http://localhost:8080/images/logo.svg"
          companyLogoAligment="right"
          companyLogoMaxWidth="200px"
          dividerColor="primary"
          copyAligment="left"
          copyMaxWidth="800px"
          // copyMaxWidth={Theme.maxWidth}
          videoId="468693933"
          videoRatio={720 / 360}
          videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
          titleUppercased={true}
        />
        <Block>
          <SocialShare 
          aligment="center"/>
          <br />
          <Text highlight={true}>
          <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est. Lobortis mattis aliquam faucibus purus in. Integer enim neque volutpat ac tincidunt vitae semper quis lectus.</strong>
          </Text>
         
          <Text dropCap>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est. Lobortis mattis aliquam faucibus purus in. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Tincidunt arcu non sodales neque. Tellus id interdum velit laoreet id donec ultrices. In nulla posuere sollicitudin aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. In massa tempor nec feugiat nisl pretium fusce id. Semper viverra nam libero justo laoreet sit amet cursus.
          </Text>
          <Text>
            Arcu non sodales neque sodales.{" "}<a href="#">Tincidunt praesent</a>  semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. A erat nam at lectus urna. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Non diam phasellus vestibulum lorem. Tristique senectus et netus et. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Etiam erat velit scelerisque in dictum non consectetur a erat. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.
          </Text>
          <Image
            source={{
              desktop:
                "http://localhost:8080/images/responsive/output/placeholder_featured_image-desktop.jpg",
              tablet:
                "http://localhost:8080/images/responsive/output/placeholder_featured_image-tablet.jpg",
              mobile:
                "http://localhost:8080/images/responsive/output/placeholder_featured_image-mobile.jpg",
            }}
            alt="Alt Text"
          />
        </Block>

        <StickyBar>
          <Menu
            sections={[
              { label: "Lore Ipsum Setion 1", path: "section1" },
              { label: "Lore Ipsum Setion 2", path: "section2" },
              { label: "Lore Ipsum Setion 3", path: "section3" },
            ]}
          />
        </StickyBar>
      </Section>
      <SectionHero
        className="section1"
        title={() => ""}
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit
        ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est. Lobortis mattis"
        // copy={() => (
        //   <p>
        //     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        //     commodo <strong>ligula eget dolor.</strong> Aenean massa. Cum
        //     sociis natoque penatibus et magnis dis parturient montes, nascetur
        //     ridiculus mus.
        //   </p>
        // )}
        // companyLogoURL="http://localhost:8080/images/logo.svg"
        // companyLogoAligment="right"
        // companyLogoMaxWidth="200px"
        dividerColor="primary"
        copyAligment="left"
        copyMaxWidth="600px"
        // copyMaxWidth={Theme.maxWidth}
        videoId="468693933"
        videoRatio={720 / 360}
        videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
        titleUppercased={true}
        />
      <Section path="section1">
        <SectionHero
        className="section1"
        title={() => "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        // subTitle="The standard Lorem Ipsum passage, used since the 1500s"
        // copy={() => (
        //   <p>
        //     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        //     commodo <strong>ligula eget dolor.</strong> Aenean massa. Cum
        //     sociis natoque penatibus et magnis dis parturient montes, nascetur
        //     ridiculus mus.
        //   </p>
        // )}
        // companyLogoURL="http://localhost:8080/images/logo.svg"
        // companyLogoAligment="right"
        // companyLogoMaxWidth="200px"
        dividerColor="primary"
        copyAligment="left"
        copyMaxWidth="600px"
        // copyMaxWidth={Theme.maxWidth}
        videoId="468693933"
        videoRatio={720 / 360}
        videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
        titleUppercased={true}
        />
        
      <RightSideBlock
        sideContent={() => (
//           <Quote>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit
// ut labore et dolore magna aliqua.
//           </Quote>
            <div>
              <p>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit
              ut labore et dolore magna aliqua.&quot;
              </p>
              <hr />
              <p>
                {/* create component for simple quotes */}
                &quot;Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est.&quot;
              </p>
            </div>
        )}
      >
        <Text dropCap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est. Lobortis mattis aliquam faucibus purus in. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Tincidunt arcu non sodales neque. Tellus id interdum velit laoreet id donec ultrices. In nulla posuere sollicitudin aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. In massa tempor nec feugiat nisl pretium fusce id. Semper viverra nam libero justo laoreet sit amet cursus. Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. 
          </Text>
          <Text>
              Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. A erat nam at lectus urna. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Non diam phasellus vestibulum lorem. 
          </Text>
          <Text>
              Tristique senectus et netus et. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Etiam erat velit scelerisque in dictum non consectetur a erat. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.
          </Text>
          <Text>
          Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. A erat nam at lectus urna. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Non diam phasellus vestibulum lorem.
          </Text>
      </RightSideBlock>
        <Block>
          <Title>Lorem Ipsum 1</Title>
          <Text dropCap>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est. Lobortis mattis aliquam faucibus purus in. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Tincidunt arcu non sodales neque. Tellus id interdum velit laoreet id donec ultrices. In nulla posuere sollicitudin aliquam. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. In massa tempor nec feugiat nisl pretium fusce id. Semper viverra nam libero justo laoreet sit amet cursus. Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. 
          </Text>
          <VimeoPlayer autoplayScroll videoID="350988305" />
          <Text>
              Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. A erat nam at lectus urna. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Non diam phasellus vestibulum lorem. 
          </Text>
          <Text>
              Tristique senectus et netus et. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Etiam erat velit scelerisque in dictum non consectetur a erat. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.
          </Text>
          <Text>
          Arcu non sodales neque sodales. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. A erat nam at lectus urna. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Non diam phasellus vestibulum lorem.
          </Text>
        </Block>
      </Section>
      <Section path="section2">
        <Block>
          <Title>Lorem Ipsum 2</Title>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>
          <Image
            source={{
              desktop:
              "http://localhost:8080/images/responsive/output/placeholder_featured_image-desktop.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/placeholder_featured_image-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/placeholder_featured_image-mobile.jpg",
            }}
            alt="Alt Text"
          />
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for &apos;lorem
            ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </Text>
        </Block>
      </Section>
      <Section path="section3">
        <Block>
          <Title>Lorem Ipsum 3</Title>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor
            sit amet..&quot;, comes from a line in section 1.10.32.
          </Text>
          <Image
            source={{
              desktop:
              "http://localhost:8080/images/responsive/output/placeholder_featured_image-desktop.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/placeholder_featured_image-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/placeholder_featured_image-mobile.jpg",
            }}
            alt="Alt Text"
          />
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &apos;Content here,
            content here&apos;, making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for &apos;lorem
            ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </Text>
        </Block>
      </Section>
      <Block style={{ backgroundColor: "#333", color: "white" }}>
        <SimpleBoilerPlate
          companyLogoURL="http://localhost:8080/images/catalyst.svg"
          title="The standard Lorem Ipsum passage, used since the 1500s"
          copy={() => (
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo <strong>ligula eget dolor.</strong> Aenean massa. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          )}
          ctaText="Find out More"
          ctaLink="https://cnbccatalyst.com"
        />
      </Block>
    </Main>
  );
}

export default Page;
