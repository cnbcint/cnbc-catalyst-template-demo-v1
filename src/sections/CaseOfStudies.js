/* eslint-disable react/prop-types */
import React from "react";
import { ColumnContainer, Column } from "../components/common/Columns";
import { TileGrid, Tile } from "../components/common/TileGrid";

export default function CaseOfStudies() {
  return (
    <div className="demo_advertorial__cases">
      <ColumnContainer>
        <Column width="100%">
          <h2>Case Studies</h2>
          <div>
            <TileGrid
              xsCols={1}
              smCols={1}
              mdCols={2}
              lgCols={2}
              xlCols={3}
              margin={20}
              maxWidth="1680px"
            >
              <Tile>
                <Item
                  title="Credit Suisse"
                  link="https://www.cnbc.com/the-brave-ones/"
                  image="http://localhost:8080/images/credit-suisse.jpg"
                />
              </Tile>
              <Tile>
                <Item
                  title="Department of Tourism Philippines"
                  link="https://www.cnbc.com/advertorial/visayas-uncharted-the-jewel-of-the-philippines/"
                  image="http://localhost:8080/images/department-tourism-philippines.jpg"
                />
              </Tile>
              <Tile>
                <Item
                  title="Ministry of Tourism India"
                  link="https://www.cnbc.com/advertorial/indias-wonders-humayuns-tomb/"
                  image="http://localhost:8080/images/ministry-tourism-india.jpg"
                />
              </Tile>
              <Tile>
                <Item
                  title="Raffles"
                  link="https://www.cnbc.com/advertorial/the-art-of-celebration/"
                  image="http://localhost:8080/images/raffles.jpg"
                />
              </Tile>
              <Tile>
                <Item
                  title="Schneider Electric"
                  link="https://www.cnbc.com/advertorial/how-data-centers-will-breathe-life-into-5g/"
                  image="http://localhost:8080/images/schneider-electric.jpg"
                />
              </Tile>
              <Tile>
                <Item
                  title="South African Tourism"
                  link="https://www.cnbc.com/advertorial/where-great-minds-meet/"
                  image="http://localhost:8080/images/south-african-tourism.jpg"
                />
              </Tile>
            </TileGrid>
          </div>
        </Column>
      </ColumnContainer>
    </div>
  );
}

function Item(props) {
  return (
    <div className="demo_advertorial__cases__case">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div>
          <img src={props.image} alt={props.title} />
          <h4>{props.title}</h4>
        </div>
      </a>
    </div>
  );
}
