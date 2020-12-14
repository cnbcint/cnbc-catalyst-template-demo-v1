import React from "react";
import Main from "./components/Main";
import Theme from "./Theme.json";
import SimpleHero from "./components/SimpleHero";
import Block from "./components/Block";
import Image from "./components/Image";
import VimeoPlayer from "./components/VimeoPlayer";
import Text from "./components/Text";
import SimpleBoilerPlate from "./components/SimpleBoilerPlate";
import SocialShare from "./components/SocialShare";
import Title from "./components/Title";
function Page() {
  return (
    <Main {...Theme}>
      <SimpleHero
        className="test"
        title={() => "The standard Lorem Ipsum passage"}
        subTitle="The standard Lorem Ipsum passage, used since the 1500s"
        copy={() => (
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        )}
        companyLogoURL="http://localhost:8080/images/catalyst.svg"
        companyLogoAligment="right"
        companyLogoMaxWidth="300px"
        dividerColor="primary"
        copyAligment="left"
        copyMaxWidth={Theme.maxWidth}
        videoId="468693933"
        videoRatio={720 / 360}
        videoCoverImage="http://localhost:8080/images/header-desktop.jpg"
      />
      <Block>
        <SocialShare />
        <br />
        <Text highlight={true}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo <strong>ligula eget dolor.</strong> Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. penatibus et magnis dis parturient montes, nascetur ridiculus.
        </Text>
        <hr />
        <Text dropCap>
          <strong>Lorem Ipsum</strong> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also{" "}
          <a href="#">the leap into electronic</a> typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Block>
      <Block style={{ padding: 0 }}>
        <VimeoPlayer autoplayScroll videoID="350988305" />
      </Block>
      <Block>
        <Title>Lorem Ipsum</Title>
        <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
          the theory of ethics, very popular during the Renaissance. The first
          line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes
          from a line in section 1.10.32.
        </Text>
        <Image
          source={{
            desktop:
              "http://localhost:8080/images/responsive/output/image02-desktop.jpg",
            tablet:
              "http://localhost:8080/images/responsive/output/image02-tablet.jpg",
            mobile:
              "http://localhost:8080/images/responsive/output/image02-mobile.jpg",
          }}
          alt="Alt Text"
        />
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content here&apos;,
          making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text,
          and a search for &apos;lorem ipsum&apos; will uncover many web sites
          still in their infancy. Various versions have evolved over the years,
          sometimes by accident, sometimes on purpose (injected humour and the
          like).
        </Text>
      </Block>
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
