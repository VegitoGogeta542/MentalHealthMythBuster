import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./main.css";
import "./App.css";
import "./components/border_hover.css";
import HoverButton from "./components/HoverButton";
import SplitScreen from "./components/split_screen";

function App() {
  const myths = [
    {
      id: 1,
      myth: "Myth 1: Mental illness is rare",
      correctAnswer: "False",
      fact: "Fact: The National Institute of Mental Health ran a study and found that 22.3 percent of adult Americans suffer from mental health issues.. Mental health is common.. Many think mental health is rare because of the social stigma, and people that suffer with them do not speak up.. This causes the illusion that they are not as prevalent as they truly are.. Everyone should support those with challenges.. Never be ashamed to share if you have a mental health problem.",
    },
    {
      id: 2,
      myth: "Myth 2: Therapy is only for severe issues",
      correctAnswer: "False",
      fact: "Fact: Many people believe therapy is only for severe mental illnesses because it is often portrayed this way in media.. However, the American Psychological Association states that nearly 75% of people in therapy see improvement in their mental health, even for everyday stressors.. Therapy is a valuable tool for anyone, not just those with severe mental health problems.",
    },
    {
      id: 3,
      myth: "Myth 3: People with mental illnesses can't work",
      correctAnswer: "False",
      fact: "Fact: This myth exists due to the stigma that mental illness makes individuals unreliable or unfit for employment.. However, according to the World Health Organization, over 70% of people with mental illnesses hold stable jobs and make meaningful contributions to society.. With proper support, people with mental health challenges can thrive in professional settings.",
    },
    {
      id: 4,
      myth: "Myth 4: Children don't experience mental health issues",
      correctAnswer: "False",
      fact: "Fact: This misconception arises because children are often viewed as carefree and without major responsibilities.. However, data from the Centers for Disease Control and Prevention (CDC) shows that 1 in 6 children aged 2–8 have a diagnosed mental, behavioral, or developmental disorder.. Early intervention and support are critical to help children manage and overcome these challenges.",
    },
    {
      id: 5,
      myth: "Myth 5: Mental health problems are a sign of weakness",
      correctAnswer: "False",
      fact: "Fact: This belief stems from societal expectations of 'toughness' and the stigma against seeking help.. According to the National Alliance on Mental Illness (NAMI), mental health challenges are caused by genetic, biological, and environmental factors.. Experiencing mental health problems is a common medical condition, not a weakness, with 1 in 5 adults affected annually in the U.S.",
    },
    {
      id: 6,
      myth: "Myth 6: You can just snap out of a mental illness",
      correctAnswer: "False",
      fact: "Fact: Many believe mental illnesses are temporary states of mind that can be overcome with willpower.. However, the National Institute of Mental Health emphasizes that mental illnesses are complex medical conditions requiring treatment and support.. For example, clinical depression affects 8.4% of U.S. adults and often requires a combination of therapy and medication for effective management.",
    },
    {
      id: 7,
      myth: "Myth 7: Only veterans have PTSD",
      correctAnswer: "False",
      fact: "Fact: This myth likely exists because PTSD is commonly associated with military service.. However, according to the American Psychiatric Association, PTSD can affect anyone who has experienced or witnessed a traumatic event, including accidents, natural disasters, or violence.. About 3.5% of U.S. adults experience PTSD annually.",
    },
    {
      id: 8,
      myth: "Myth 8: Medication is the only solution for mental illnesses",
      correctAnswer: "False",
      fact: "Fact: Many people believe medication is the sole treatment for mental illnesses due to its widespread use.. However, the Mayo Clinic states that a combination of therapy, lifestyle changes, and medication is often the most effective approach.. Therapy and non-pharmaceutical interventions have shown long-term benefits for many individuals.",
    },
  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const mythsPerPage = 4; // Number of myths per page
  const displayedMyths = myths.slice(
    (currentPage - 1) * mythsPerPage,
    currentPage * mythsPerPage
  );

  return (
    <Router>
      <Routes>
        {/* Title Screen */}
        <Route path="/" element={<TitleScreen />} />

        {/* Home (Myths Display with Pagination) */}
        <Route
          path="/home"
          element={
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                gridTemplateRows: "repeat(2, 1fr)", // Two rows
                gap: "20px",
                padding: "20px",
                height: "100vh",
                width: "100vw",
              }}
            >
              {displayedMyths.map((myth) => (
                <div key={myth.id} style={{ textAlign: "center" }}>
                  {/* Display only "Myth 1," "Myth 2," etc. */}
                  <HoverButton title={`Myth ${myth.id}`} link={`/story${myth.id}`} />
                </div>
              ))}

              {/* Pagination */}
              <div
                style={{
                  gridColumn: "span 2",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                {currentPage > 1 && (
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    style={navButtonStyle}
                  >
                    Previous Page
                  </button>
                )}
                {currentPage < Math.ceil(myths.length / mythsPerPage) && (
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    style={navButtonStyle}
                  >
                    Next Page
                  </button>
                )}
              </div>
            </div>
          }
        />

        {/* Individual Myth Stories */}
        {myths.map((myth) => (
          <Route
            key={myth.id}
            path={`/story${myth.id}`}
            element={
              <SplitScreen
                myth={myth.myth}
                correctAnswer={myth.correctAnswer}
                fact={myth.fact}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

const navButtonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  borderRadius: "5px",
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

function TitleScreen() {
  return (
    <div
      className="font-sour-gummy"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      {/* Title Container */}
      <div
        style={{
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        <Link
          to="/"
          className="font-sour-gummy"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "60px",
          }}
        >
          Mental Health MythBuster
        </Link>
      </div>

      {/* Button Container */}
      <div className="quadrantbutton">
        <Link to="/home">
          <button className="start-button">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
