/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const answers = [
  { id: "82b5cf51-c76c-11ea-a1e0-51a2294d6107", label: "Yes" },
  { id: "82b5f660-c76c-11ea-a1e0-51a2294d6107", label: "No" },
  { id: "82b5f661-c76c-11ea-a1e0-51a2294d6107", label: "Maybe" },
];

export default function PollWidgetDemo() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showVote, setShowVote] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const onChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleShowResults = () => {
    setShowVote(false);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowVote(true);
    setShowResults(false);
  };

  return (
    <div className="demo_advertorial__polldemo">
      <h3>Poll Api Demo</h3>
      <div id="polldemoapi" className="catalyst_widgets__poll">
        <div className="catalyst_widgets__poll__question">
          Do you like this poll?
        </div>
        {showVote && (
          <PollVoteInterface
            onChange={onChange}
            selectedOption={selectedOption}
            handleShowResults={handleShowResults}
          />
        )}
        {showResults && <PollResults handleBack={handleBack} />}
      </div>
    </div>
  );
}

function PollVoteInterface(props) {
  const [loading, setLoading] = useState(false);
  const handleVote = () => {
    fetch(
      "https://catalyst-widgets-stage.herokuapp.com/api/public/polls/82b5cf50-c76c-11ea-a1e0-51a2294d6107/vote/" +
        props.selectedOption
    ).then((result) => {
      result.json().then(() => {
        setLoading(false);
        props.handleShowResults();
      });
    });
  };
  if (loading) return <div>Loading</div>;
  return (
    <div
      className="catalyst_widgets__poll__answers"
      id="polldemowidget__answers"
    >
      <ul>
        {answers.map((a, key) => {
          return (
            <li key={"option" + key}>
              <input
                type="radio"
                name="poll_api_answer"
                onChange={props.onChange}
                value={a.id}
                checked={props.selectedOption === a.id}
                id={"option" + key}
              />
              <label htmlFor={"option" + key}>{a.label}</label>
            </li>
          );
        })}
      </ul>
      <div className="catalyst_widgets__poll__cta_holder">
        <button
          className="catalyst_widgets__poll__vote_cta"
          disabled={!props.selectedOption}
          onClick={handleVote}
        >
          Vote
        </button>
        <button
          className="catalyst_widgets__poll__results_cta"
          onClick={props.handleShowResults}
        >
          View Results
        </button>
      </div>
    </div>
  );
}

function PollResults(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://catalyst-widgets-stage.herokuapp.com/api/public/polls/82b5cf50-c76c-11ea-a1e0-51a2294d6107"
    ).then((result) => {
      result.json().then((data) => {
        setData(data);
      });
    });
  }, []);

  if (!data) return <div>Loading</div>;
  return (
    <div>
      <ul>
        {data.answers.map((a, key) => {
          const p = Math.round((a.votes * 100) / data.totalVotes);
          return (
            <li key={"result" + key}>
              <div className="catalyst_widgets__poll__results__label">
                {a.label}
              </div>
              <div className="catalyst_widgets__poll__results__bar">
                <div style={{ width: p + "%" }}>{p}%</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="catalyst_widgets__poll__cta_holder">
        <button
          className="catalyst_widgets__poll__back_cta"
          onClick={props.handleBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}
